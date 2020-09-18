<template>
    <div class="container" v-if="showTabs">
        <div class="row d-none d-md-block">
            <div class="col">
                <b-nav tabs justified class="cover-tabs">
                    <slot></slot>
                </b-nav>
            </div>
        </div>
        <div class="row menu-tab-mobile d-md-none">

            <b-button v-b-toggle.menu-tab-mobile class="m-1">Ir a...</b-button>

            <b-collapse id="menu-tab-mobile">
                <slot></slot>
            </b-collapse>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MenuTabsComponent",
    data: () => ({
      showTabs: false
    }),

    mounted() {
      this.showTabs = true
    }
  }
</script>

<style lang="scss" scoped>
    .menu-tab-mobile {
        > button {
            margin: 0 !important;
            width: 100%;
        }

        #menu-tab-mobile {
            width: 100%;

            /deep/ .nav-item {
                background-color: #DBDBDB;
                > a {
                    color: #4B4B4B !important;
                    padding-top: 15px !important;
                    padding-bottom: 15px !important;
                    font-size: 22px;
                }
            }

            /deep/ .nav-item .active {
                background-color: #37BBE1;
                color: #FFF !important;
            }
        }
    }
</style>