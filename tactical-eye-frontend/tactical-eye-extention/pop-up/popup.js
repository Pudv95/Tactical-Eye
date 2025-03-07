document.addEventListener("DOMContentLoaded", async () => {
    console.log("Popup loaded!"); // Debugging
    const fenOutput = document.getElementById("fenOutput");

    // Get extracted FEN from content script
    let boardFEN = await getStoredFEN();
    console.log("FEn: ",boardFEN);

    document.getElementById("generate").addEventListener("click", () => {
        console.log("clicked");
        let turn = document.getElementById("turn").value;
        let castling = document.getElementById("castling").value || "-";
        let enpassant = document.getElementById("enpassant").value || "-";
        let halfmove = document.getElementById("halfmove").value || "0";
        let fullmove = document.getElementById("fullmove").value || "1";

        let finalFEN = `${boardFEN} ${turn} ${castling} ${enpassant} ${halfmove} ${fullmove}`;
        fenOutput.value = finalFEN;
        console.log(finalFEN);
    });

    // Function to retrieve FEN from storage
    function getStoredFEN() {
        return new Promise((resolve) => {
            browser.storage.local.get(["fenString"], (result) => {
                resolve(result.fenString || "8/8/8/8/8/8/8/8");
            });
        });
    }
});
