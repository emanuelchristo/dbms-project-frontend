export function netRating(userRating, googleRating) {
	if (userRating == null) return googleRating
	else return 0.5 * userRating + 0.5 * googleRating
}
