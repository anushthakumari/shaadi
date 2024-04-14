const authRoutes = ["/register", "/login"];
const authFreeRoutes = ["/", ...authRoutes];

export const authConfig = {
	secret: "tes",
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isAuthPage = authRoutes.includes(nextUrl.pathname);

			if (isAuthPage && isLoggedIn) {
				return Response.redirect(new URL("/", nextUrl));
			}

			if (authFreeRoutes.includes(nextUrl.pathname)) {
				return true;
			}

			return isLoggedIn;
		},
	},
	providers: [],
};
