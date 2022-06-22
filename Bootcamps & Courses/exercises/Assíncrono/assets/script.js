const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-it');
btn.addEventListener('click', loadImg);