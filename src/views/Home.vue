<template>
  <div class="home">
    <section id="course" class="course">
      <div class="course-text">
        <div class="container">
             <Header></Header>
        </div>
      </div>
    </section>
      <Lesson id="lesson"></Lesson>
      <Card id="card"></Card>
      <Result id="result"></Result>
      <Curator></Curator>
      <More id="more"></More>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Card from "../components/Card";
import Lesson from "../components/Lesson";
import Result from "../components/Result";
import Curator from "../components/Curator";
import More from "../components/More";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Card,
    Lesson,
    Result,
    Curator,
    More,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  .course {
    background-color: #20163a;
    color: #FFFFFF;
    background-attachment: fixed;
    position: relative;

    .course-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;

      .container {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 100%;
        margin-top: 55px;
        @media(min-width: 1140px) {
          max-width: 1140px;
          padding: 12px 0;
        }
      }
    }
  }
}

</style>
