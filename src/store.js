import Vue from "vue";
import Vuex from "vuex";
import SidebarOpen from "#/Sidebar/SidebarOpen";
import SidebarClose from "#/Sidebar/SidebarClose";
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		title: "SudoSass",
		sidebarOpen: false,
		sidebarComponent: SidebarClose,
		pages: [
			{ path: "/", name: "Home" },
			{ path: "/docs", name: "Docs" }
		],
	},
	getters: {
		sidebarOpen: state => state.sidebarOpen,
		pageCount: state => {
			return state.pages.length;
		}
	},
	mutations: {
		TOGGLE_SIDEBAR: (state) => {
			state.sidebarOpen = !state.sidebarOpen
			if (state.sidebarOpen) {
				state.sidebarComponent = SidebarOpen
			}
			if (!state.sidebarOpen) {
				state.sidebarComponent = SidebarClose
			}

		}
	},
	actions: {
		toggleSidebar({ commit, state }) {
			commit(types.TOGGLE_SIDEBAR)
		}
	}
})