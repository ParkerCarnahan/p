function platform(x, y, w, h, col, topCol) {
	noStroke();
	// Main Platform
	fill(col);
	rect(x, y, w, h);
	// Platform Top
	fill(topCol);
	rect(x, y, w, 2);
}
