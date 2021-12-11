function janken(user) {
  // コンピュータの手の画像ファイル名を配列に保存
  let pcJankens = ['soso_1.png', 'sonken_2.png', 'ryubi_3.png'];

  // ユーザの手の画像ファイル名を配列に保存
  let userJankens = ['soso_1.png', 'sonken_2.png', 'ryubi_3.png'];

  // コンピュータの手を乱数(0～2）で作成
  let pc = Math.floor(Math.random() * 3);

  // ユーザの手の画像を表示するimgタグをDOMツリーから検索
  let userImg = document.getElementById("userImg");
　// 検索したimgタグのsrc属性に該当するファイル名を設定
　 userImg.src = "img/" +  userJankens[user];  

  // コンピュータの手の画像を表示するimgタグをDOMツリーから検索
  let pcImg = document.getElementById("pcImg");
  // 検索したimgタグのsrc属性に該当するファイル名を設定
  pcImg.src = "img/" + pcJankens[pc];

  // ユーザから見た勝敗結果(文字列)を定義
 if (user === pc) {
    result = `あいこ`;
} else if(user === 1 && pc === 0) {
  　result  = `あなたの勝ち`;
}　else if(user === 2 && pc === 0) {
  result  = "あなたの勝ち";
}　else if(user === 2 && pc === 1) {
  result  = "あなたの勝ち";
}　else {
  result  = `あなたの負け`;
}

  // 勝敗結果を出す
  document.getElementById("result").innerHTML = result;
}