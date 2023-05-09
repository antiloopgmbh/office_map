<?php

class SlackApi {
    private const URL = 'https://slack.com/api/';
    private const TOKEN = 'xoxb-4303111365302-4583674885282-2LsRNA9msRZPAimOdSkjW0xV';
    private $cache = [];

    public function __construct() {
        $resource = $_GET['resource'] ?? null;

        if ($resource) {
            $method = 'process' . ucfirst($resource);

            if ($method)
                $this->{$method}();
        }
    }

    protected function processProfiles() {
        $data = $this->request('conversations.members', [
            'channel' => 'C049GAGCH97'
        ])?->members;

        $result = array_values(array_filter(array_map(function($id) {
            return $this->manipulateProfile($id);
        }, $data ?: []), fn($a) => !$a['isBot']));

        if (!$result)
            http_response_code(204);

        echo json_encode($result);
        exit;
    }

    protected function processInTheOffice() {
        $data = $this->request('conversations.history', [
            'channel' => 'C049GAGCH97',
            'limit' => 5
        ]);

        $pollMessage = array_values(array_filter($data->messages, fn($message) => $message->type == 'message' && isset($message->subtype) && $message->subtype == 'bot_message' && strpos($message->text, date('W') !== false)))[0] ?? null;

        if ($pollMessage) {
            $result = [];
            $blocksOffset = (date('w') - 1) * 2;
            $blocksLimit = $blocksOffset + 4;

            foreach (array_slice($pollMessage->blocks, 1 + $blocksOffset, -1) as $key => $block) {
                preg_match('/(?:\:.*: )(.*?)(?:\n(.*?)$|$)/', $block->text->text, $textParts);

                if (!$textParts)
                    continue;

                $name = trim(preg_replace('/`[\d]+`/', '', $textParts[1]));
                $users = array_filter(explode(', ', trim(preg_replace('/[<\@>]/', '', $textParts[2]))));

                $users = array_map(function($id) {
                    return $this->manipulateProfile($id);
                }, $users);

                $result[] = [
                    'title' => $name,
                    'users' => $users
                ];
            }

            if (!empty($result)) {
                echo json_encode($result);
                exit;
            }
        }
        
        http_response_code(204);
        exit;
    }

    protected function processSkribbl() {
        $data = $this->request('conversations.history', [
            'channel' => 'C049GAGCH97',
            'limit' => 5
        ]);

        preg_match("/'(https:\/\/skribbl\.io\/\?.*?)'/", var_export($data, true), $skribblUrl);

        if ($skribblUrl) {
            echo json_encode([
                'url' => $skribblUrl[1]
            ]);
            exit;
        }

        http_response_code(204);
        exit;
    }

    protected function processWhiteboard() {
        $data = $this->request('conversations.history', [
            'channel' => 'C049GAGCH97',
            'limit' => 5
        ]);

        preg_match("/'(https:\/\/webwhiteboard\.com\/board\/.*?)'/", var_export($data, true), $whiteboardUrl);

        if ($whiteboardUrl) {
            echo json_encode([
                'url' => $whiteboardUrl[1]
            ]);
            exit;
        }

        http_response_code(204);
        exit;
    }

    protected function request($method, $params = null) {
        $url = self::URL . $method;

        if ($params)
            $url .= '?' . http_build_query($params);

        $unique = md5($url);
        if (isset($this->cache[$unique]))
            return json_decode($this->cache[$unique]);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Authorization: Bearer ' . self::TOKEN
        ));

        $response = curl_exec($ch);
        curl_close($ch);

        try {
            $json = json_decode($response);
            $this->cache[$unique] = $response;

            return $json;
        } catch(\Error $e) {
            exit($e->getMessage());
        }
    }

    private function manipulateProfile($id) {
        $user = $this->request('users.info', [
            'user' => $id
        ])->user;

        return [
            'id' => $id,
            'name' => $user->profile->real_name_normalized,
            'email' => !$user->is_bot ? $user->profile->email : '',
            'image' => $user->profile->image_192,
            'url' => 'slack://user?team=T07UQTGP3&id=' . $id,
            'tzLabel' => $user->tz_label,
            'isBot' => $user->is_bot
        ];
    }
}