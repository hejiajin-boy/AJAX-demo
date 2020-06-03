console.log('hello hejiajin2 ')
    //用AJAX 请求的完整过程


//（1）请求CSS
getCSS.onclick = () => {
    //创建一个XMLHttpRequest 对象
    const request = new XMLHttpRequest()
        //调用对象的OPEN方法
    request.open("GET", "/style.css");
    //监听对象的onload&onerror事件
    request.onreadystatechange = () => {

        if (request.readyState === 4) {

            //加个判断防止出现404页面的加载成功
            if (request.status >= 200 && request.status < 300) {
                console.log('success')
                    //创建 style 标签
                const style = document.createElement("style");
                //填写 style 内容
                style.innerHTML = request.response;
                //插到头里生效
                document.head.appendChild(style);

            } else {
                alert('加载 CSS 失败')
            }
        }
    };
    //调用对象的send 的方法（发送请求）
    request.send();



};

//(2) 请求JS
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log('2成功了')

        //创建 script 标签
        const script = document.createElement('script')
            //填写 script 内容
        script.innerHTML = request.response
            //插到头里生效
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('2失败了')
    }
    request.send()

};



//（3）请求HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/hejiajin.html')
    request.onload = () => {
        console.log('何加劲来了')
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)

    }
    request.onerror = () => {
        console.log('何加劲回去了')
    }
    request.send()
};


//（4）请求XML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            console.log(request.responseXML)
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim()) //trim除去空格等
        }
    };
    request.send()
}