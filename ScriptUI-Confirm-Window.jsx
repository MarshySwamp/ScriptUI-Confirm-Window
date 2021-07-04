// Configure the confirmation text parameters to pass to the main window function
scriptConfirmation("Confirmation Window Title", "Confirmation text string 1", "Confirmation text string 2");

// Main function
function scriptConfirmation(confirmationTitle, confirmationString1, confirmationString2) {

    try {

        // CONFIRMATION WINDOW
        var confirmationWindow = new Window("dialog");
        confirmationWindow.text = confirmationTitle;
        /*
        // DIALOG BACKGROUND COLOR
        var gra = dialog.graphics;
        var uiBrush = gra.newBrush(gra.BrushType.SOLID_COLOR, [0.3, 0.3, 0.3, 1]);
        gra.backgroundColor = uiBrush;
        */
        confirmationWindow.preferredSize.width = 300;
        confirmationWindow.preferredSize.height = 100;
        confirmationWindow.orientation = "column";
        confirmationWindow.alignChildren = ["left", "top"];
        confirmationWindow.spacing = 15;
        confirmationWindow.margins = 20;

        // TEXT GROUP
        var textGroup = confirmationWindow.add("group", undefined, { name: "textGroup" });
        textGroup.preferredSize.width = 300;
        textGroup.orientation = "column";
        textGroup.alignChildren = ["left", "center"];
        textGroup.spacing = 5;
        textGroup.margins = 0;

        // TEXT STRINGS
        var confirmationText1 = textGroup.add("statictext", undefined, undefined, { name: "confirmationText1", multiline: true });
        confirmationText1.text = confirmationString1;
        confirmationText1.graphics.font = ScriptUI.newFont("dialog", "bold", 13);
        confirmationText1.alignment = ["left", "center"];
        /*
        // TEXT COLOR
        confirmationText1.graphics.foregroundColor = confirmationText1.graphics.newPen(confirmationText1.graphics.PenType.SOLID_COLOR, [1, 1, 1], 1);
        */

        var confirmationText2 = textGroup.add("statictext", undefined, undefined, { name: "confirmationText2", multiline: true });
        confirmationText2.text = confirmationString2;
        confirmationText2.graphics.font = "dialog:13";
        confirmationText2.alignment = ["left", "center"];
        /*
        // TEXT COLOR
        confirmationText2.graphics.foregroundColor = confirmationText2.graphics.newPen(confirmationText2.graphics.PenType.SOLID_COLOR, [1, 1, 1], 1);
        */

        // BUTTON GROUP
        var buttonGroup = confirmationWindow.add("group", undefined, { name: "buttonGroup" });
        buttonGroup.orientation = "row";
        buttonGroup.alignChildren = ["left", "top"];
        buttonGroup.spacing = 0;
        buttonGroup.margins = 0;

        // CANCEL BUTTON
        var cancelButton = buttonGroup.add("button", undefined, undefined, { name: "cancelButton" });
        cancelButton.text = "Cancel";
        cancelButton.justify = "left";

        // OK BUTTON
        var okButton = buttonGroup.add("button", undefined, undefined, { name: "okButton" });
        okButton.text = "OK";
        okButton.justify = "left";

        // RENDER THE WINDOW & OK BUTTON ACTION
        if (confirmationWindow.show() === 1) {
            // Code to run on OK
            placeHolderCode();
        } else {
            //alert("Script cancelled!");
            app.beep();
        }

        ///////////////////////////////

        // MOCK FUNCTION TO RUN WHEN THE OK BUTTON IS PRESSED
        function placeHolderCode() {
            alert("You pressed the OK button!");
        }
    }
    catch (err) {
        alert("If you see this message an unexpected error has occurred!");
    }

}
