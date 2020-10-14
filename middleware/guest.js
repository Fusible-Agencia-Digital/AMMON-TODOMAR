export default async function ({ redirect, $auth, $axios, route }) {

    // If the user is not authenticated
    if ($auth.$state.loggedIn) {
      return redirect('/congreso-virtual');
    }
}