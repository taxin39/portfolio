// 対象の要素を取得
const elements1 = document.querySelectorAll('.fade-in');

// オプション設定
const options = {
    root: null, // ビューポートを基準に
    threshold: 0.3 // 要素の30%が表示されたときにコールバック
};

// コールバック関数
const callback1 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // visibleクラスを追加
        } else {
            entry.target.classList.remove('visible'); // visibleクラスを削除
        }
    });
};

// インターセクションオブザーバーのインスタンスを作成
const observer1 = new IntersectionObserver(callback1, options);

// 各要素を監視
elements1.forEach(element => {
    observer1.observe(element);
});


// 対象の要素を取得
const elements2 = document.querySelectorAll('.fade-left');

// コールバック関数
const callback2 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // visibleクラスを追加
        } else {
            entry.target.classList.remove('visible'); // visibleクラスを削除
        }
    });
};

// インターセクションオブザーバーのインスタンスを作成
const observer2 = new IntersectionObserver(callback2, options);

// 各要素を監視
elements2.forEach(element => {
    observer2.observe(element);
});