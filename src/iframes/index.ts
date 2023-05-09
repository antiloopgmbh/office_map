export default (content: string) => `
    <html>
        <style>
            body {
                font-family: sans-serif;
                background-color: #f6f6f6;
                color: #14304c;
                line-height: 1.5;
                padding: 1.5rem 1rem;
            }

            h1 {
                margin-top: 0;
            }

            .inthehouse-headline {
                margin: 0;
                margin-bottom: 0.5rem;
            }

            .inthehouse-profile {
                display: inline-flex;
                align-items: center;
                margin-bottom: 0.25rem;
                padding: 4px 6px;
                border: 1px solid #e5e7eb;
                border-radius: 4px;
                font-size: 14px;
                color: inherit;
                text-decoration: none;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px -1px rgba(0, 0, 0, 0.1)
            }

            .inthehouse-profile img {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
                border-radius: 50%;
            }

            .weAre {
                margin: -1.5rem -1rem;
                padding: 1.5rem 1.5rem;
                background-color: #f3f4f6;
            }

            .weAre ul {
                display: grid;
                grid-template-columns: repeat(1,minmax(0,1fr));
                gap: 1.5rem;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .weAre ul li {
                display: flex;
                flex-direction: column;
                grid-column: span 1/span 1;
                border-radius: 0.5rem;
                background-color: #fff;
                text-align: center;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px -1px rgba(0, 0, 0, 0.1)
            }

            .weAre-top {
                display: flex;
                flex: 1 1 0%;
                flex-direction: column;
                padding: 2rem;
            }

            .weAre-top img {
                display: block;
                vertical-align: middle;
                flex-shrink: 0;
                width: 6rem;
                height: 6rem;
                margin-left: auto;
                margin-right: auto;
                border-radius: 9999px;
            }

            .weAre-name {
                display: block;
                margin-top: 1.5rem;
                font-size: 1rem;
                font-weight: 500;
            }

            .weAre-secondary {
                display: block;
                margin-top: 0.25rem;
                color: #6b7280;
                font-size: 0.875rem;
            }

            .weAre-bottom {
                display: flex;
                margin-top: -1px;
                border-top: 1px solid #e5e7eb;
            }

            .weAre-bottom a {
                display: flex;
                flex: 1 1 0%;
                justify-content: center;
                align-items: center;
                width: 0;
                color: #14304c;
                font-weight: 600;
                font-size: .875rem;
                line-height: 1.25rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                text-decoration: none;
            }

            .weAre-bottom a:nth-child(1) {
                border-bottom-left-radius: 0.5rem;
                border-right: 1px solid #e5e7eb;
            }

            .weAre-bottom a:nth-child(2) {
                border-bottom-right-radius: 0.5rem;
            }

            .weAre-bottom a:hover {
                color: #56eaff;
            }

            .weAre-bottom a svg {
                width: 1.25rem;
                height: 1.25rem;
                color: #9ca3af;
            }

            .weAre-bottom a span {
                display: inline-block;
                margin-left: 0.75rem;
            }

            @media (min-width: 640px) {
                .weAre ul {
                    grid-template-columns: repeat(2,minmax(0,1fr));
                }
            }

            @media (min-width: 768px) {
                .weAre ul {
                    grid-template-columns: repeat(3,minmax(0,1fr));
                }
            }

            @media (min-width: 1024px) {
                .weAre ul {
                    grid-template-columns: repeat(4,minmax(0,1fr));
                }
            }
            </style>
        <body>
            ${content}
        </body>
    </html>`;