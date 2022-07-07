let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function homeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
}