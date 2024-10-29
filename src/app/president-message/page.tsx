import Image from 'next/image'; 
 
export default function PresidentMessagePage() { 
  return ( 
    <> 
  
      <div className="fixed top-[63px] right-0 -z-10 w-max shrink-0 max-md:w-fit max-md:translate-y-[10%]"> 
        <Image 
          src="/presidentMessage.jpg" 
          alt="社長挨拶。" 
          width={500} 
          height={330} 
          priority={true} 
        /> 
      </div> 

 
      <div className="relative max-w-[950px]  mx-auto pt-[300px] pb-[50px] p-4 z-20 text-[rgb(90,62,25)]"> 
        <h2 className="text-3xl font-bold mt-6 leading-[2]">ごあいさつ</h2> 
        <h3 className="text-lg font-semibold ">社長挨拶</h3> 
        <p className="mt-4 leading-relaxed"> 
          　創業以来、我々「株式会社 印刷工房」は多岐にわたる印刷物を提供する総合印刷会社として、緑豊かな揖斐川のほとりで「よりよいもの」を探求しながら、多くの方々に支えていただき成長してきました。心より厚く御礼申し上げます。  
          <br /><br /> 
          　広告や書籍をはじめ、様々な印刷物がデジタル化されている現代でありながらも、我々印刷会社の持つ技術は日々進化を遂げております。より多様な紙への印刷の対応、画像の持つ空気感や息遣いまで伝えるような細やかな色の表現などが可能となり、印刷物は単なる情報伝達技術を超えるものとなりつつあると感じております。そんな中、我々「株式会社印刷工房」は、リーフレットやパンフレット、カタログや便箋、食品ラベルなど多岐にわたる印刷物を手掛け、皆様の生活の近くにある数多くの印刷物をお届けしてまいりました。  
          <br /><br /> 
          　身近な印刷物を手掛ける当社だからこそ、高品質のより良い印刷物をお手元にお届けしたい。ご注文を頂いたお客様、そして出来上がった印刷物を実際に手に取り、ご覧になる皆様の心に残るようなものをご提供したい。そんな思いから我々は、一つの商品に関わるすべての当社の仲間達が「職人」であるという自覚を持つことを大切にしております。  
          <br /><br /> 
          　いい企画、いい商品、いい応対、すべてがまさしく、持てる技能を最大限活かし、お客様のためにまっすぐ仕事に向き合う「職人」の姿であるといえるでしょう。「株式会社印刷工房」は、所属する一人一人が「職人」たることを目指し、これからも、皆様の生活をより鮮やかに彩る印刷物をお届けしてまいります。  
          <br /><br /> 
          　　今後とも、変わらぬご支援、ご鞭撻をよろしくお願いいたします。 
        </p> 
      </div> 
    </> 
  ); 
}
