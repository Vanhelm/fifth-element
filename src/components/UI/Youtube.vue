<template>
  <div className="btn">
    <a className="simple-btn" href="https://www.youtube.com/channel/UCxSkfOrrbXysgwswTB0hp1Q">
      <img src="@/assets/youtube.svg" alt="">
      <span>Посмотреть ютуб</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Youtube',
  data() {
    return {}
  }
}

</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  margin: 5px;
  .simple-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 75px;
    border: 1px solid #A7F271;
    border-radius: 10px;
    background-color: #A7F271;
    color: #000000;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-decoration: none;
    transition: all 0.2s;
    height: 56px;
    text-align: center;
    width: 100%;
      @media(max-width: 1140px) {
        padding: 10px;
        width: 100%;
      }
    span {
      display: flex;
      margin-left: 5px;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
    }
  }
  .simple-btn:hover {
    background-color: #1265F5;
    border-color: #FFED69;
    color: #FF5E48;
    cursor: pointer;
  }
}





</style>
