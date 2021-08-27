const dialog_mess=[
/* 1*/    '<img class="dialog-img" src="https://1.bp.blogspot.com/-Sc8yco-viHo/XGjx-QTIsQI/AAAAAAABRdQ/gewM4I81yLQBSyub3w2gVWH3YRi3YQnwwCLcBGAs/s450/gomi_mochikaerimasyou.png" width="200px" height:auto><h2>ごみは持ち帰りましょう。</h2>ここはあなただけの場所ではないはずです<br>',
/* 2*/    '<img class="dialog-img" src="https://3.bp.blogspot.com/-tGmipqgNmUE/Wp94MbBAxUI/AAAAAAABKrk/S4I9io-1iWYZAz6C8Ti7rfr5pYRgifSFACLcBGAs/s400/match_fire.png" width="200px" height:auto><h2>火の管理にはご注意を</h2>マッチやたばこ、花火のポイ捨ては厳禁<br>火気厳禁ではないかも気を付けて<br>',
/* 3*/    '<img class="dialog-img" src="https://2.bp.blogspot.com/-MATh9ig9uHo/V2uceOS5ObI/AAAAAAAA7zQ/iimwPym0XCcoTkfroMT9OGTzb5lgPiXagCLcB/s400/suigai_kawa_mizukasa_ame.png" width="200px" height:auto><h2>川の増水に気を付けて</h2>雨の日に川に近づくのはやめておこう<br>',
/* 4*/    '<img class="dialog-img" src="https://4.bp.blogspot.com/-wRTOPUkOi9U/Vt_uBZrvlLI/AAAAAAAA4sI/2AH9rK-CGbc/s400/suigai_kawa_mizukasa.png" width="200px" height:auto><h2>川は急変する</h2>上流に雨が降ると下流が急に増水することがあるよ<br>天気が崩れてきたら早めに安全そうな高台に逃げよう<br>',
/* 5*/    '<img class="dialog-img" src="https://1.bp.blogspot.com/-I58msrO6NHw/XesocHmXaoI/AAAAAAABWXY/NFdBVBq1tacuxIRnH6IU51aitTEA4j8WACNcBGAsYHQ/s400/jiko_oboreru.png" width="200px" height:auto><h2>もし溺れたら</h2>あわてず騒がず、まず落ち着こう<br>そのまま静かに水面を漂って救助を待とう<br>落ち着け<br>',
/* 6*/    '<img class="dialog-img" src="https://1.bp.blogspot.com/-g8SvoaWXsu4/WxvKcz2XKGI/AAAAAAABMpQ/bINODvUI3M40fVxhbD8XOHi0fj-R4TI2gCLcBGAs/s380/swimming_life_jacket_boy.png" width="200px" height:auto><h2>溺れる</h2>どんなに泳ぎがうまくても溺れることがある<br>準備運動をキチンとして、ライフジャケットをつけよう<br>少しの面倒で助かる命もある<br>',
/* 7*/    '<img class="dialog-img" src="https://3.bp.blogspot.com/-lCf2aOv_dh8/WR_LQe-0DqI/AAAAAAABEeo/GshIxEF2gd0qvJ3Zn9SO6CDvk4UZK4c7ACLcB/s300/syouha_block_tetrapod1.png" width="200px" height:auto><h2>危険！テトラポッド</h2>テトラポッドは隙間が多く存在し<br>落ちると抜け出せないことも<br>あまり近づかないようにしよう<br>',
/* 8*/    '<img class="dialog-img" src="https://3.bp.blogspot.com/-Bn9QqDrak3g/VkxN3POU9tI/AAAAAAAA00k/1g2bot5Xrbc/s400/tozan_sounan.png" width="200px" height:auto><h2>遭難</h2>登山道などを外れて山に入ると迷うことも<br>そんな時は無理に降りようとせず頂上を目指そう<br>',
/* 9*/    '<img class="dialog-img" src="https://2.bp.blogspot.com/-BbCJiQ5HapA/VkxNlfQ6RuI/AAAAAAAA0xg/_yFteAETmW0/s400/kaminari_rakurai_tree.png" width="200px" height:auto><h2>雷</h2>雷は高いところに落ちる習性があるので木に落ちる可能性がある<br>ゴロゴロと聞こえたら急いで屋根のある建物に避難しよう<br>',
/*10*/    '<img class="dialog-img" src="https://1.bp.blogspot.com/-wkOBdalXEQE/V8VFHtSr9pI/AAAAAAAA9Z8/ylNnNCBWo0sjzxhte4xlEUsZB8fWl6Q1wCLcB/s400/summer_water_jug.png" width="200px" height:auto><h2>水分補給はしっかり</h2>水を飲もう！<br>夏でも冬でも<br>',
/*11*/    '<img class="dialog-img" src="https://3.bp.blogspot.com/-YtjftnKFO_c/Wk2upKz_LdI/AAAAAAABJaY/vJ2RnwdUeqE8RSH3r11u3W_Eneau9K_uACLcBGAs/s400/kosyudenwa_digital.png" width="200px" height:auto><h2>もしも事故が起きたら…</h2>海の事故は「118」<br>山の事故は「110」「119」<br>事故が起きたらすぐに予防<br>',
/*12*/    '<img class="dialog-img" src="https://1.bp.blogspot.com/-05aCDR0ZTzc/X1CLEtZkcwI/AAAAAAABa0w/bHCe2_YyVrMTYgBsvLxxmZ27JkkLHrZEACNcBGAsYHQ/s400/ocean_same_hire.png" width="200px" height:auto><h2>サメに出会ったら</h2>むやみに刺激せず逃げる<br>水しぶきを立てない<br>複数人でいるなら海中で大声を出す<br>鼻や目を攻撃する<br>難を逃れたら陸に上がり、速やかに通報する<br><a href="https://waval.net/11989/">WAVAL</a><br>',
/*13*/    '<img class="dialog-img" src="" width="200px" height:auto><h2></h2><br>',
/*14*/    '<img class="dialog-img" src="" width="200px" height:auto><h2></h2><br>',
/*15*/    '<img class="dialog-img" src="" width="200px" height:auto><h2></h2><br>',
/*16*/    '<img class="dialog-img" src="" width="200px" height:auto><h2></h2><br>',
]

let dialog=document.querySelector("dialog");

const rand=Math.floor(Math.random()*12);

function show_dialog(){
    const dialogs = document.getElementById('dialog_area');
    dialogs.innerHTML = '<center>'+dialog_mess[rand]+`<button onclick="close_dialog()">閉じる</button></center>`;
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