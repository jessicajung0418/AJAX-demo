console.log('main.js文件运行成功')

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'public/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const style = document.createElement('style');
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'public/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'public/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'public/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'public/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}