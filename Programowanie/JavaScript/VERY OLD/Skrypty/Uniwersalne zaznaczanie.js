function setSelectionRange(input, selectionStart, selectionEnd)
{
	if (input.setSelectionRange)
	{
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	}
	else if (input.createTextRange)
	{
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}

function setCaretToEnd (input)
{
	setSelectionRange(input, input.value.length, input.value.length);
}

function setCaretToBegin (input)
{
	setSelectionRange(input, 0, 0);
}

function setCaretToPos (input, pos)
{
	setSelectionRange(input, pos, pos);
}

function selectString (input, string)
{
	var match = new RegExp(string, "i").exec(input.value);
	if (match)
	{
		setSelectionRange (input, match.index, match.index + match[0].length);
	}
}

function replaceSelection (input, replaceString)
{
	if (input.setSelectionRange)
	{
		var selectionStart = input.selectionStart;
		var selectionEnd = input.selectionEnd;
		input.value = input.value.substring(0, selectionStart)
					+ replaceString
					+ input.value.substring(selectionEnd);
		if (selectionStart != selectionEnd) // has there been a selection
			setSelectionRange(input, selectionStart, selectionStart + replaceString.length);
		else // set caret
			setCaretToPos(input, selectionStart + replaceString.length)
		;
	}
	else if (document.selection)
	{
		var range = document.selection.createRange();
		if (range.parentElement() == input)
		{
			var isCollapsed = range.text == '';
			range.text = replaceString;
			// there has been a selection
			if (!isCollapsed)
			{
				//it appears range.select() should select the newly 
				//inserted text but that fails with IE
				range.moveStart('character', -replaceString.length);
				range.select();
			}
		}
	}
}
