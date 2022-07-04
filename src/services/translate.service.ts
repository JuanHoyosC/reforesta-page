export async function getTranslate(text: string = '') {
    const data = { text, from: 'es', to: 'en' }
    const response = await fetch('https://pure-retreat-55148.herokuapp.com/',{ method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'content-type': 'application/json;charset=UTF-8',
                        },
                    });
    const { textTranslate } = await response.json();
    return textTranslate ? textTranslate : text; 
}