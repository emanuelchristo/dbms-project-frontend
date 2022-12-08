export function netRating(userRating, googleRating) {
	if (userRating == null) return googleRating
	else return 0.25 * userRating + 0.75 * googleRating
}
