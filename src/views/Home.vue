<template>
  <div class="home">
    <section class="course">
      <div class="course-text">
        <div class="container">
             <Header></Header>
        </div>
      </div>
    </section>
      <Card></Card>
      <Lesson></Lesson>
      <Result></Result>
  </div>
</template>

<script>
import Header from '../components/Header';
import Card from "../components/Card";
import Lesson from "../components/Lesson";
import Result from "../components/Result";

export default {
  name: "Home",
  components: {
    Header,
    Card,
    Lesson,
    Result,
  },
};
</script>

<style lang="scss" scoped>
.course {
  background-color: #262626;
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
      }
    }
  }
}

</style>
