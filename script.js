document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-12-16");
    const endDate = new Date("2024-12-25");
    const today = new Date();
    const boxesContainer = document.querySelector(".container");

    const surprises = [
        "Surprise for December 16th: May your heart be filled with the warmth of the Christmas spirit, and your home with love and laughter. Here's to making wonderful memories with the people you cherish most. Merry Christmas and a joyful New Year! 🎄",
        "Surprise for December 17th: May your heart be filled with the warmth of the Christmas spirit, and your home with love and laughter. Here's to making wonderful memories with the people you cherish most. Merry Christmas and a joyful New Year! 🎅🏼",
        "Surprise for December 18th: You are the warmth in the winter chill, the sparkle in the snow, and the beauty in every moment this holiday season. May your Christmas be as magical and radiant as you are. ❄️",
        "Surprise for December 19th: A holiday movie recommendation! 'The Holiday' movie, and of course, Home Alone 🍿",
        "Surprise for December 20th: Time for some Christmas music! 'Last Christmas' by Wham, or 'All I Want for Christmas Is You' by Mariah Carey, or 'Feliz Navidad' 🎶",
        "Surprise for December 21st: A heartwarming Christmas story! There's nothing better than 'A Christmas Carol' and also a great movie recommendation 📖",
        "Surprise for December 22nd: Hint about your Secret Santa = younger than you 🎁",
        "Surprise for December 23rd: Hint about your surprise = more than one gift 🎁🎁",
        "Surprise for December 24th: Hint about your Secret Santa: m3aky fih el media  🎄",
        "Surprise for December 25th: Merry Christmas, my dear friend! 🎅🏼 I hope this holiday season brings you lots of love, laughter, and everything your heart desires. May you find joy in every moment, and may the new year be filled with hope, happiness, and endless adventures. With love, your Secret Santa."
    ];

    const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 0; i < days; i++) {
        const boxDate = new Date(startDate);
        boxDate.setDate(boxDate.getDate() + i);
        const box = document.createElement("div");
        box.className = "box";
        box.id = `box${i + 1}`;
        const isUnlocked = today >= boxDate;

        // Initially, set content to be hidden
        const content = `
            <div class="content" style="display: none;">
                <p>${isUnlocked ? surprises[i] : "Wait for this day!"}</p>
            </div>
        `;

        box.innerHTML = `
            <div class="cover">${boxDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
            })}</div>
            ${content}
        `;

        boxesContainer.appendChild(box);

        // Add click event to reveal the surprise when clicked
        box.addEventListener("click", function () {
            if (isUnlocked) {
                box.classList.toggle("expanded");
                const contentElement = box.querySelector(".content");
                contentElement.style.display = contentElement.style.display === "none" ? "block" : "none";
            } else {
                alert("Not yet! Wait for the right day!");
            }
        });
    }
});
