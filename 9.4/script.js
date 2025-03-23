document.addEventListener("DOMContentLoaded", function ()
{
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	// TODO: Load the note color from the local storage.
	let noteColor = null; // Stores the selected note color from the form.
	if (localStorage.getItem('noteColor')){
		noteColor = localStorage.getItem('noteColor')
	}
	// TODO: Load the note ID counter from the local storage.
	let noteIdCounter = 0; // Counter for assigning unique IDs to new notes.
	if (localStorage.getItem('noteIdCounter')){
		noteIdCounter = localStorage.getItem('noteIdCounter')
	}

	// TODO: Load the notes from the local storage.
	function loadSavedNotes(){
		let notes = localStorage.getItem('notes')
		
		if (notes) {
			notes = JSON.parse(notes)
			for (const note of notes){
				const newNote = document.createElement("textarea");
				console.log(note)
				newNote.setAttribute("data-note-id", note.id.toString()); // Stores the note ID to its data attribute.
				newNote.value = note.content; // Sets the note ID as value.
				newNote.className = "note"; // Sets a CSS class.
				newNote.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
				noteContainer.appendChild(newNote); // Appends it to the note container element as its child.
	
			}
		}

		
	}

	loadSavedNotes()


	function addNewNote ()
	{
		const id = noteIdCounter;
		const content = `Note ${id}`;

		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
		note.value = content; // Sets the note ID as value.
		note.className = "note"; // Sets a CSS class.
		note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
		noteContainer.appendChild(note); // Appends it to the note container element as its child.

		noteIdCounter++; // Increments the counter since the ID is used for this note.

		localStorage.setItem('noteIdCounter', noteIdCounter)
		// TODO: Add new note to the saved notes in the local storage.

		let notes = localStorage.getItem('notes')
		if (notes){
			notes = JSON.parse(notes)
		} else {
			notes = []
		}
		notes.push({id: parseInt(id, 10), content})  // Ensure the ID is a number
		
			localStorage.setItem('notes', JSON.stringify(notes))
	}
	colorForm.addEventListener("submit", function (event)
	{
		event.preventDefault(); // Prevents the default event.

		const newColor = colorInput.value.trim();  // Removes whitespaces.

		const notes = document.querySelectorAll(".note");
		for (const note of notes)
		{
			note.style.backgroundColor = newColor;
		}

		colorInput.value = ""; // Clears the color input field after from submission.

		noteColor = newColor; // Updates the stored note color with the new selection.

		// TODO: Update the note color in the local storage.
		localStorage.setItem('noteColor', noteColor)

	});

	newNoteButton.addEventListener("click", function ()
	{
		addNewNote();
	});

	document.addEventListener("dblclick", function (event)
	{
		if (event.target.classList.contains("note"))
		{
			event.target.remove(); 
			const noteId = parseInt(event.target.getAttribute("data-note-id"),10); 
			let notes = localStorage.getItem('notes')
			if (notes){
				
				notes = JSON.parse(notes)
				const noteIndex = notes.findIndex(note => note.id === noteId);
				if (noteIndex !== -1)
					{
						notes.splice(noteIndex, 1); 
						console.log(notes)
					}

					localStorage.setItem('notes', JSON.stringify(notes))



			
		}
	}
	});

	noteContainer.addEventListener("blur", function (event)
	{
		if (event.target.classList.contains("note"))
		{	
			// TODO: Update the note from the saved notes in the local storage.
			
			const noteId = parseInt(event.target.getAttribute("data-note-id"),10); 
			let notes = localStorage.getItem('notes')
			if (notes){
				
				notes = JSON.parse(notes)
				const noteIndex = notes.findIndex(note => note.id === noteId);
				console.log(noteIndex)
				if (noteIndex !== -1)
					{
						notes[noteIndex].content = event.target.value
						console.log(notes)
					}

					localStorage.setItem('notes', JSON.stringify(notes))

			
		}


		}
	}, true);

	window.addEventListener("keydown", function (event)
	{
		/* Ignores key presses made for color and note content inputs. */
		if (event.target.id === "color-input" || event.target.type === "textarea")
		{
			return;
		}

		/* Adds a new note when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N")
		{
			addNewNote(); // Adds a new note.
		}
	});
});
