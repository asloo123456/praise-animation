const baseUrl = 'https://img12.360buyimg.com/img/'

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}
class ThumbsUpAni {
    imgsList = []
    scaleTime = 0.1; // 百分比
    constructor() {
        this.loadImages();
        const canvas = document.getElementById("canvas");
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
    }
    loadImages() {

        const images = [
            'jfs/t1/93992/8/9049/4680/5e0aea04Ec9dd2be8/608efd890fd61486.png',
            'jfs/t1/108305/14/2849/4908/5e0aea04Efb54912c/bfa59f27e654e29c.png',
            'jfs/t1/98805/29/8975/5106/5e0aea05Ed970e2b4/98803f8ad07147b9.png',
            'jfs/t1/94291/26/9105/4344/5e0aea05Ed64b9187/5165fdf5621d5bbf.png',
            'jfs/t1/102753/34/8504/5522/5e0aea05E0b9ef0b4/74a73178e31bd021.png',
            'jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png'
        ];
        const promiseAll = [];
        images.forEach(src => {
            const p = new Promise(function(resolve) {
                const img = new Image();
                img.onload = resolve.bind(null, img);
                img.src = baseUrl + src
            })
            promiseAll.push(p)
        })

        Promise.all(promiseAll).then(imgsList => {
            this.imgsList = imgsList.filter(d => d && d.width > 0)
        })
    }

    createRender() {
        const basicScale = [0.6, 0.9, 1.2][getRandom(0, 2)]; //随机大小
        const getScale = (diffTime) => {

        }

        const context = this.context;
        const image = this.imgsList[getRandom(0, this.imgsList.length - 1)]
        const offset = 20;
        const basicX = this.width / 2 + getRandom(-offset, offset);


        const getTranslateX = diffTime => {

        };

        const getTranslateY = diffTime => {

        };

        const fadeOutStage = getRandom(14, 18) / 100;
        const getAlpha = diffTime => {

        };
    }


    start() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = "#f4f4f4";
        this.context.fillRect(0, 0, 200, 400);
    }
}

function requestFrame(cb) {
    return (
        window.requestAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60)
        }
    )(cb)
}