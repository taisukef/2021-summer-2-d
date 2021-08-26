const dialog_mess=[
    '<p><img src="https://1.bp.blogspot.com/-Sc8yco-viHo/XGjx-QTIsQI/AAAAAAABRdQ/gewM4I81yLQBSyub3w2gVWH3YRi3YQnwwCLcBGAs/s450/gomi_mochikaerimasyou.png" width="100%"></p><p><h2>ごみは持ち帰りましょう。</h2>ここはあなただけの場所ではないはずです</p>',
    '<p><img src="https://3.bp.blogspot.com/-tGmipqgNmUE/Wp94MbBAxUI/AAAAAAABKrk/S4I9io-1iWYZAz6C8Ti7rfr5pYRgifSFACLcBGAs/s400/match_fire.png" width="80%"></p><p><h2>火の管理にはご注意を</h2>マッチやたばこ、花火のポイ捨ては厳禁<br>火気厳禁ではないかも気を付けて</p>',
    '<p><img src="https://2.bp.blogspot.com/-MATh9ig9uHo/V2uceOS5ObI/AAAAAAAA7zQ/iimwPym0XCcoTkfroMT9OGTzb5lgPiXagCLcB/s400/suigai_kawa_mizukasa_ame.png" width="100%"></p><p><h2>川の増水に気を付けて</h2>雨の日に川に近づくのはやめておこう</p>',
    '<p><img src="https://4.bp.blogspot.com/-wRTOPUkOi9U/Vt_uBZrvlLI/AAAAAAAA4sI/2AH9rK-CGbc/s400/suigai_kawa_mizukasa.png" width="100%"></p><p><h2>川は急変する</h2>上流に雨が降ると下流が急に増水することがあるよ<br>天気が崩れてきたら早めに安全そうな高台に逃げよう</p>',
    '<p><img src="https://1.bp.blogspot.com/-I58msrO6NHw/XesocHmXaoI/AAAAAAABWXY/NFdBVBq1tacuxIRnH6IU51aitTEA4j8WACNcBGAsYHQ/s400/jiko_oboreru.png" width="100%"></p><p><h2>もし溺れたら</h2>あわてず騒がず、まず落ち着こう<br>そのまま静かに水面を漂って救助を待とう<br>落ち着け<br></p>',
    '<p><img src="https://1.bp.blogspot.com/-g8SvoaWXsu4/WxvKcz2XKGI/AAAAAAABMpQ/bINODvUI3M40fVxhbD8XOHi0fj-R4TI2gCLcBGAs/s380/swimming_life_jacket_boy.png" width="70%"></p><p><h2>溺れる</h2>どんなに泳ぎがうまくても溺れることがある<br>準備運動をキチンとして、ライフジャケットをつけよう<br>少しの面倒で助かる命もある<br></p>'
]
let dialog=document.querySelector("dialog");

let rand=Math.floor(Math.random()*(6));

function show_dialog(){
    const dialogs = document.getElementById('dialog_area');
    dialogs.innerHTML = dialog_mess[rand]+`<button onclick="close_dialog()">閉じる</button>`;
    console.log(dialogs.innerHTML);
}

function close_dialog() {
    dialog.close();
}

/*
1           <p><img src="https://1.bp.blogspot.com/-Sc8yco-viHo/XGjx-QTIsQI/AAAAAAABRdQ/gewM4I81yLQBSyub3w2gVWH3YRi3YQnwwCLcBGAs/s450/gomi_mochikaerimasyou.png" width="100%"></p>
            <p><h2>ごみは持ち帰りましょう。</h2>
                ここはあなただけの場所ではないはずです
            </p>

2           <p><img src="https://3.bp.blogspot.com/-tGmipqgNmUE/Wp94MbBAxUI/AAAAAAABKrk/S4I9io-1iWYZAz6C8Ti7rfr5pYRgifSFACLcBGAs/s400/match_fire.png" width="100%"></p>
            <p><h2>火の管理にはご注意を</h2>
                マッチやたばこ、花火のポイ捨ては厳禁
            </p>
            
3           <p><img src="https://2.bp.blogspot.com/-MATh9ig9uHo/V2uceOS5ObI/AAAAAAAA7zQ/iimwPym0XCcoTkfroMT9OGTzb5lgPiXagCLcB/s400/suigai_kawa_mizukasa_ame.png" width="100%"></p>
            <p><h2>川の増水に気を付けて</h2>
                雨の日に川に近づくのはやめておこう
            </p>
            
4           <p><img src="https://4.bp.blogspot.com/-wRTOPUkOi9U/Vt_uBZrvlLI/AAAAAAAA4sI/2AH9rK-CGbc/s400/suigai_kawa_mizukasa.png" width="100%"></p>
            <p><h2>川は急変する</h2>
                上流に雨が降ると下流が急に増水することがあるよ<br>
                天気が崩れてきたら早めに安全そうな高台に逃げよう
            </p>
            
5           <p><img src="https://1.bp.blogspot.com/-I58msrO6NHw/XesocHmXaoI/AAAAAAABWXY/NFdBVBq1tacuxIRnH6IU51aitTEA4j8WACNcBGAsYHQ/s400/jiko_oboreru.png" width="100%"></p>
            <p><h2>もし溺れたら</h2>
                あわてず騒がず、まず落ち着こう<br>
                そのまま静かに水面を漂って救助を待とう<br>
                落ち着け<br>
            </p>
            
6           <p><img src="https://1.bp.blogspot.com/-g8SvoaWXsu4/WxvKcz2XKGI/AAAAAAABMpQ/bINODvUI3M40fVxhbD8XOHi0fj-R4TI2gCLcBGAs/s380/swimming_life_jacket_boy.png" width="100%"></p>
            <p><h2>溺れる</h2>
                どんなに泳ぎがうまくても溺れることがある<br>
                準備運動をキチンとして、ライフジャケットをつけよう<br>
                少しの面倒で助かる命もある<br>
            </p>
            
        
*/