export default async function ({ redirect, $auth, $axios, route }) {

    const errorMessage = {unauthorized: true}

    // If the user is not authenticated
    if (!$auth.$state.loggedIn) {
      return redirect('/');
    }
}
