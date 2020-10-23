import { SpinnerPlugin } from "bootstrap-vue";

export default async function ({ redirect, $auth }) {
  //let isFree = window.localStorage.getItem('is_free') == '1' ? true : false;
    if ($auth.user.is_free) {

      if (process.client) {
        window.location.href = '/congreso-virtual/live';
      }

      //redirect('/congreso-virtual/canal-uno')
    }
}
