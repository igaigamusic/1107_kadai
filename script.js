document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const luckyItemBtn = document.getElementById("luckyItem"); // 新しいラッキーアイテムボタン
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const modalText = document.getElementById("modalText");

    // メッセージと対応する色を定義
    const messageColorMap = {
        "HAPPY!!": "bg-red-500",
        "GOOD!": "bg-orange-500",
        "SO-SO": "bg-green-500",
        "NOT SO GOOD": "bg-blue-500",
        "BAD...": "bg-purple-500"
    };
    const messages = Object.keys(messageColorMap); // メッセージリストを取得

    // 表示するラッキーアイテムと画像を定義
    const luckyImages = {
        "チャーハン": "img/chahan.PNG",
        "もやしナムル": "img/moyashi_namuru.PNG",
        "シューマイ": "img/shumai.PNG",
        "よだれ鶏": "img/yodaredori.PNG",
        "ザーサイ": "img/zasai.PNG"
    };
    const luckyitems = Object.keys(luckyImages); //ラッキーアイテムのリストを取得

    // クリック回数のカウンター
    let clickCount = 0;

    // 今日の運勢を表示するモーダル
    function openModal() {
        if (clickCount >= 1) return; // 2回以上はクリックできないようにする
            clickCount++;

        // ランダムなメッセージを選択
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // メッセージに対応する色を取得
        const colorClass = messageColorMap[randomMessage];
        
        // モーダルの内容を設定
        modalContent.className = `p-6 rounded-lg text-white transition-all duration-300 ${colorClass}`;
        modalText.textContent = randomMessage;

        // モーダルを表示
        modal.classList.remove("hidden");
    }


    // ラッキーアイテムを表示するモーダル
    function showLuckyItem() {
        if (clickCount >= 2) return; // 3回以上はクリックできないようにする
            clickCount++;


            // ランダムなアイテム名を選択
            const randomItemName = luckyitems[Math.floor(Math.random() * luckyitems.length)];
            
            // アイテム名に対応する画像を取得
            const randomImage = luckyImages[randomItemName];

            // モーダルの背景色をピンクに設定
            modalContent.className = "p-6 rounded-lg text-pink-900 bg-pink-100 transition-all duration-300";

            // モーダルの内容を設定
            modalText.textContent = `今日のラッキーアイテムは「${randomItemName}」`;

            // ランダムな画像を挿入
            const imageElement = document.createElement("img");
            imageElement.src = randomImage;
            imageElement.alt = randomItemName; // アイテム名をalt属性に設定
            imageElement.className = "object-contain w-40 h-40 mt-4 rounded-lg"; // スタイルを設定
            modalContent.appendChild(imageElement);

            // モーダルを表示
            modal.classList.remove("hidden");
    }

    // モーダルを閉じる関数
    function closeModal() {
        modal.classList.add("hidden");

        // 前回の画像を削除（ラッキーアイテム画像用）
        const existingImage = modalContent.querySelector("img");
        if (existingImage) {
            modalContent.removeChild(existingImage);
        }
    }

    // イベントリスナーの設定
    openModalBtn.addEventListener("click", openModal);
    luckyItemBtn.addEventListener("click", showLuckyItem); // 新しいラッキーアイテムボタンのクリックイベント
    closeModalBtn.addEventListener("click", closeModal);
});
