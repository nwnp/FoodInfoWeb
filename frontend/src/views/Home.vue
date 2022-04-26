<template>
  <div class="home">
    <div style="margin: 15px">
      <div style="margin: 0 auto">
        <input
          type="text"
          id="search"
          style="
            border: solid 1px;
            border-radius: 20px;
            width: 50%;
            height: 40px;
            text-align: center;
          "
          placeholder="찾고싶은 음식을 입력하세요"
        />
        <div style="margin: 2px; width: 50%; display: inline-block">
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>비오틴</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>아연</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>마카</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>종합비타민</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>오메가-3</b-badge>
          </h5>
          <h5 style="display: inline-block; margin: 3px">
            <b-badge>아르기닌</b-badge>
          </h5>
        </div>
      </div>
      <div>
        <h1>hello world! 여기서부터 다시 진행</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
};
</script>
