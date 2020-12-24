<template lang="pug">
  .newscontainer
    .newsb
      .newspagetitle {{newstitle}}
        .newsmail {{newsm}}
    .newsflex
      //-.newsitem(v-for="item in news")
        .newtext {{item.bb}}
          .newpp {{item.pp}}//
    .greyblue
      .gbtitle {{gbtext}}
    .lightblue
      .lbtitle {{lbtext}}
    .darkblue
      .dbtitle {{dbtext}}
    .grey1
    .g1title {{g1text}}
    .grey2
    .g2title {{g2text}}
    .grey3
    .g3title {{g3text}}
    .grey4
    .g4title {{g4text}}
    .grey5
    .g5title {{g5text}}
    .grey6
    .g6title {{g6text}}
    .left
    .right
    .image
    .image1
    .image2
    .image3
    .image4
    .image5
    .image6

    .test

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  
  data(){
    return{
      newstitle: '國立清華大學 藝術學院',
      newsm: '國立清華大學藝術學院 Email   Tel:+886-3-5715131 #78801   2020 Copyright ©',
      gbtext: 'HOME 關於學院» 學院師資» 學院規章» 招生訊息» 榮譽榜» 活動花絮» 藝院影音» 藝術學報» 聯絡資訊',
      lbtext: '訊息類別',
      dbtext: 'Top news 合作交流   國際交流   學生獲獎   學院公告   學院活動   招生訊息',
      g1text:'音樂系',
      g2text:'藝設系',
      g3text:'科技藝術',
      g4text:'藝術創新碩士',
      g5text:'科藝研究中心',
      g6text:'藝術專題講座',
      /*news:[
        {bb:'yeee',pp:'yaaaa'},
        {bb:'yee',pp:'yaaa'},
        {bb:'ye',pp:'yaa'},
        {bb:'y',pp:'ya'},
        {bb:'yeeee',pp:'yaaaaa'},
        {bb:'ye',pp:'yaa'}
      ]*/
    }
  }
}
</script>
<style lang="sass">
.newscontainer
  position: relative
  width: 1440px
  height: 900px
  border: 1px solid #aaa
.newspagetitle
  position: absolute
  left: 27px
  top: 20px
  font-size: 50px
.newsb
  position: absolute
  background-color:#AFC7CF
  width: 1440px
  height: 103px
.newsmail
  position: absolute
  width: 515px
  height: 28px
  left: 900px
  top: 60px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #000000
.newsflex
  display: flex
  flex-direction: row
  flex-wrap:wrap
  justify-content: space-between  
.newtext
  font-size: 24px
  margin-bottom: 10px
  font-weight: 500
.newpp
  font-size: 40px
  margin-bottom: 10px
.greyblue
  position: absolute
  width: 1398px
  height: 49px
  left: 16px
  top: 112px
  background: #6B8896
.gbtitle
  position: absolute
  letter-spacing: 0.2em
  left: 38px
  top: 7px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  color: #D0CEC2
.lightblue
  position: absolute
  width: 260px
  height: 65px
  left: 1138px
  top: 183px
  background: #AFC7CF
.lbtitle
  position: absolute
  left: 60px
  top: 7px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 36px
  color: #003D5A
.darkblue
  position: absolute
  width: 260px
  height: 611px
  left: 1138px
  top: 248px
  background: #003D5A
.dbtitle
  position: absolute
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  left: 10px
  top: 50px
  font-size: 36px
  line-height: 70px
  letter-spacing: 0.2em
  white-space: pre-wrap
  color: #AFC7CF
.grey1
  position: absolute
  width: 169px
  height: 169px
  left: 17px
  top: 688px
  background: #D0CEC2
.g1title
  position: absolute
  width: 72px
  height: 31px
  left: 57px
  top: 862px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 31px
  color: #5E5357
.grey2
  position: absolute
  width: 169px
  height: 169px
  left: 197px
  top: 688px
  background: #D0CEC2
.g2title
  position: absolute
  width: 72px
  height: 31px
  left: 246px
  top: 862px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 31px
  color: #5E5357
.grey3
  position: absolute
  width: 169px
  height: 169px
  left: 383px
  top: 688px
  background: #D0CEC2
.g3title
  position: absolute
  width: 96px
  height: 31px
  left: 420px
  top: 862px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 31px
  color: #5E5357
.grey4
  position: absolute
  width: 169px
  height: 169px
  left: 566px
  top: 688px
  background: #D0CEC2
.g4title
  position: absolute
  width: 144px
  height: 31px
  left: 579px
  top: 862px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 31px
  color: #5E5357
.grey5
  position: absolute
  width: 169px
  height: 169px
  left: 749px
  top: 688px
  background: #D0CEC2
.g5title
  position: absolute
  width: 144px
  height: 31px
  left: 762px
  top: 862px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 31px
  color: #5E5357
.grey6
  position: absolute
  width: 169px
  height: 169px
  left: 934px
  top: 688px
  background: #D0CEC2
.g6title
  position: absolute
  width: 144px
  height: 31px
  left: 947px
  top: 862px
  font-family: Yantramanav
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 31px
  color: #5E5357
.left
  position: absolute
  width: 0px
  height: 0px
  border-style: solid
  border-width: 0px 25px 35px 25px
  border-color: transparent transparent #003D5A transparent
  left: 25px
  top: 395px
  transform: rotate(-90deg)
.right
  position: absolute
  width: 0px
  height: 0px
  border-style: solid
  border-width: 0px 25px 35px 25px
  border-color: transparent transparent #003D5A transparent
  left: 1050px
  top: 395px
  transform: rotate(90deg)
.image
  background-image: url("../assets/aaa.png")
  position: absolute
  width: 940px
  height: 400px
  left: 95px
  top: 230px
  background-size: cover
.image1
  background-image: url("../assets/bb.png")
  position: absolute
  width: 69px
  height: 70px
  left: 59px
  top: 737px
  background-size: cover
.image2
  background-image: url("../assets/cc.png")
  position: absolute
  width: 73px
  height: 70px
  left: 246px
  top: 740px
  background-size: cover
.image3
  background-image: url("../assets/gg.png")
  position: absolute
  width: 68px
  height: 67px
  left: 433px
  top: 740px
  background-size: cover
.image4
  background-image: url("../assets/ee.png")
  position: absolute
  width: 68px
  height: 67px
  left: 614px
  top: 740px
  background-size: cover
.image5
  background-image: url("../assets/ff.png")
  position: absolute
  width: 67px
  height: 56px
  left: 799px
  top: 748px
  background-size: cover
.image6
  background-image: url("../assets/dd.png")
  position: absolute
  width: 44px
  height: 70px
  left: 994px
  top: 740px
  background-size: cover
</style>