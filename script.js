document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-12-16");
    const endDate = new Date("2024-12-25");
    const today = new Date();
    const boxesContainer = document.querySelector(".container");

    const surprises = [
        "Surprise for December 16th: Enjoy a festive treat! 🎄",
        "Surprise for December 17th: A warm Christmas message from Santa! 🎅🏼",
        "Surprise for December 18th: A cozy winter quote for you! ❄️",
        "Surprise for December 19th: A holiday movie recommendation! 🍿",
        "Surprise for December 20th: Time for some Christmas music! 🎶",
        "Surprise for December 21st: A heartwarming Christmas story! 📖",
        "Surprise for December 22nd: A surprise gift suggestion! 🎁",
        "Surprise for December 23rd: A funny Christmas joke! 🎉",
        "Surprise for December 24th: A holiday wish from your Secret Santa! 🎁",
        "Surprise for December 25th: Merry Christmas! 🎄🎅🏼 Enjoy your day!"
    ];

    const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 0; i < days; i++) {
        const boxDate = new Date(startDate);
        boxDate.setDate(boxDate.getDate() + i);
        const box = document.createElement("div");
        box.className = "box";
        box.id = `box${i + 1}`;
        const isUnlocked = today >= boxDate;

        box.innerHTML = `
            <div class="cover">${boxDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
            })}</div>
            <div class="content" style="display: ${isUnlocked ? "block" : "none"};">
                <p>${isUnlocked ? surprises[i] : "Wait for this day!"}</p>
            </div>
        `;
        boxesContainer.appendChild(box);

        // Add click event to open the box in full screen
        box.addEventListener("click", () => {
            if (isUnlocked) {
                box.classList.toggle("expanded");
            } else {
                alert("Not yet! Wait for the right day!");
            }
        });
    }
});
