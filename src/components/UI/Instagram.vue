<template>
  <div className="btn">
    <a className="simple-btn" href="https://www.instagram.com/chingis.kurmangaliyev/?utm_medium=copy_link" target="_blank">
      <img src="@/assets/insta.svg" alt="">
      <span>Посмотреть инстаграм</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Youtube',
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
    padding: 18px 25px;
    border: 1px solid #58be00;
    border-radius: 10px;
    background-color: #58be00;
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
        padding: 0 10px;
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
    color: #ffffff;
    cursor: pointer;
  }
}


</style>
