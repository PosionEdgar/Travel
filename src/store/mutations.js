export default {
	changeCity (state, city) {
		state.city = city
		try {
			if (localStorage.city) {
				defaultCity = localStorage.city
			}
		} catch (e) {}
	}
}
