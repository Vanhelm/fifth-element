<template>
  <div class="btn">
    <a class="simple-btn" href="#">Оставить заявку</a>
  </div>
</template>

<script>
 export default {
   name: 'button',
   data() {
     return {

     }
   }
 }

</script>

<style lang="scss" scoped>
  .btn {
    display: flex;
    .simple-btn {
      display: inline-block;
      padding: 1.625rem 2.625rem 1.625rem 2.625rem;
      border: 1px solid #A7F271;
      border-radius: 10px;
      background-color: #A7F271;
      color: #000000;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 0;
      text-decoration: none;
      transition: all 0.2s;
      width: 247px;
      height: 56px;
      text-align: center;
      @media(max-width: 1140px) {
        width: 100%;
      }
    }
    .simple-btn:hover {
      background-color: #FF5E48;
      border-color: #FFED69;
    }
  }


</style>
