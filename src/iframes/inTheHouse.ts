import html from './index';

export default (data: object[]): string => {
    let content = `
        <h1>Who is in the house:</h1>
        ${data.length ? data.map((a: any) => {
            return `
                <h4 class="inthehouse-headline">${a.title}</h4>
                ${a.users.map((b: any) => `<a href="${b.url}" class="inthehouse-profile"><img src="${b.image}"> <span>${b.name}</span></a>`).join(' ')}`
        }).join('<br><br>') : 'No information available'}
    `;
    return html(content)
};