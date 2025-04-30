// 当页面滚动时显示/隐藏按钮
window.onscroll = function() {
    var backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// 点击按钮返回顶部
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
    });
};


// 动态加载
// JavaScript代码
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        loadContent(page);
    });
});

function loadContent(page) {
    // 使用fetch加载对应内容
    fetch(`content/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-container').innerHTML = html;
        })
        .catch(err => console.error('加载内容失败:', err));
}

// 默认加载首页
loadContent('home');