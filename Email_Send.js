var EMAIL_TEMPLATE_DOC_URL = //Hidden 
//

// This constant is written in column C for rows for which an email
// has been sent successfully.
var EMAIL_SENT = 'EMAIL_SENT';

//'<li><a href="' + url + '">' + topic + '</a></li>'
/**
 * Sends non-duplicate emails with data from the current spreadsheet.
 */
function sendEmails2() {
	var sheet = SpreadsheetApp.getActiveSheet();
	var startRow = 4; // First row of data to process
	var numRows = 5; // Number of rows to process
	// Fetch the range of cells A2:B3
	var dataRange = sheet.getRange(startRow, 1, numRows, 13);
	// Fetch values for each row in the Range.
	var data = dataRange.getValues();
	for (var i = 0; i < data.length; ++i) {
		var row = data[i];
		var emailAddress = row[0]; // First column
		var prof = row[11]
		var notes = "Your most compatible professor is" + " " + prof + "!" + "\n"
		if (prof == "Shari Prevost") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + '<li><a href="' + 'https://www.reddit.com/r/rutgers/comments/9d131k/has_anyone_had_shari_provost_for_a_math_class/' + '">' + 'Reddit' + '</a></li>' + "\n" + '<li><a href="' + 'https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2288541' + '">' + 'Ratemyproffesor' + '</a></li>' + "\n" + '<li><a href="' + 'https://math.rutgers.edu/component/comprofiler/userprofile/sap137?Itemid=714' + '">' + 'Bio' + '</a></li>'
			//var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/9d131k/has_anyone_had_shari_provost_for_a_math_class/ " + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2288541" + "\n" +  "Bio: https://math.rutgers.edu/component/comprofiler/userprofile/sap137?Itemid=714"
		} else if (prof == "Vladimir Scheffer") {
			var message = notes
		} else if (prof == "Feng Luo") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=333729" + "\n" + "Bio:https://www.math.rutgers.edu/component/comprofiler/userprofile/fluo?Itemid=774"
		} else if (prof == "Mathew Sequin") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1862610" + "\n" + "Bio: https://math.rutgers.edu/component/comprofiler/userprofile/mjs626?Itemid=711"
		} else if (prof == "Alejandro Ginory") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/cpz399/alejandro_ginory/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1915199" + "\n" + "Bio: https://math.rutgers.edu/component/comprofiler/userprofile/ag930?Itemid=714 and https://sites.math.rutgers.edu/~ag930/"
		} else if (prof == "Peter Ullman") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/9d9fuo/has_anyone_had_peter_ullman_before/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2079421" + "\n" + "Bio: https://www.math.rutgers.edu/component/comprofiler/userprofile/pmu2?Itemid=714"
		} else if (prof == "Francesca Guerra") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/94n2tn/guerra_for_chem_161/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1684024" + "\n" + "Bio: https://rutgerstutor.com/chem-professors/dr-francesca-guerra/"
		} else if (prof == "Ana Kornienko") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/d02vnk/prof_kornienko_for_general_chemistry_161_should_i/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1783981"
		} else if (prof == "Paul Kimmel") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/a0ekj8/paul_kimmel_for_chem_162/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=81252" + "\n" + "Bio: https://rutgerstutor.com/chem-professors/dr-paul-kimmel/"
		} else if (prof == "Brian Langowski") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1837364" + "\n" + "Bio: https://rutgerstutor.com/chem-professors/dr-bryan-langowski/"
		} else if (prof == "Sally Mulvey") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1341632" + "\n" + "Bio: https://www.math.rutgers.edu/component/comprofiler/userprofile/samulvey?Itemid=714"
		} else if (prof == "Steven Safran") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=739067" + "\n" + "Bio: https://www.math.rutgers.edu/component/comprofiler/userprofile/ssafran"
		} else if (prof == "Lewis Hirsch") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/8iopf9/precalc_112_with_hirsch_over_the_summer/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1095905" + "\n" + "Bio: https://www.math.rutgers.edu/component/comprofiler/userprofile/hirsch?Itemid=738"
		} else if (prof == "Arminda Wey") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1206166" + "\n" + "Bio: https://www.math.rutgers.edu/component/comprofiler/userprofile/wey?Itemid=714"
		} else if (prof == "James Amodio") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/aknum5/precalc_111_with_james_amodio/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=646508" + "\n" + "Bio: https://www.math.rutgers.edu/component/comprofiler/userprofile/jamodio?Itemid=738"
		} else if (prof == "John Kerrigan") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1242792"
		} else if (prof == "Marshall Saunders") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/k8w108/how_good_or_bad_is_marshall_saunders_for_intro_to/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2257470" + "\n" + "Bio: https://www.business.rutgers.edu/faculty/marshall-saunders"
		} else if (prof == "Disen Huang") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/cwusxx/disen_huang_for_financial_accounting/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2519194" + "\n" + "Bio: https://www.business.rutgers.edu/faculty/disen-huang"
		} else if (prof == "Evan Wasserman") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/9x3oz2/dont_take_wasserman_for_accounting/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2010241" + "\n" + "Bio: https://www.business.rutgers.edu/faculty/evan-wasserman"
		} else if (prof == "Mark Goldhammer") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2015871"
		} else if (prof == "Tom Prusa") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/kwu84d/prusa_vs_hohmann_for_micro/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=185212" + "\n" + "Bio: https://economics.rutgers.edu/people/faculty/people/86-faculty/223-prusa-thomas"
		} else if (prof == "Bruce Madariaga") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=425826"
		} else if (prof == "Michael Elgawly") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/4lsoy7/michael_elgawly_for_econ/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2140801" + "\n" + "Bio: https://economics.rutgers.edu/people/faculty/people/211-teaching-personnel/726-elgawly-michael"
		} else if (prof == "Alexandre Hohmann") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/aowk32/thoughts_on_prof_hohmann_for_intro_to_micro/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1918156" + "\n" + "Bio: https://economics.rutgers.edu/people/faculty/people/86-faculty/733-hohmann-alex"
		} else if (prof == "Raymond Stone") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/l1i2bg/intro_to_macroeco_professor/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=994783" + "\n" + "Bio: https://economics.rutgers.edu/people/faculty/people/86-faculty"
		} else if (prof == "Neil Sheflin") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/k604kf/intro_to_macro_with_neil_sheflin/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=23287" + "\n" + "Bio: https://economics.rutgers.edu/people/faculty/people/86-faculty/229-sheflin-neil"
		} else if (prof == "Priyank Gandhi") {
			var message = notes
		} else if (prof == "Lei Yu") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/l0wmft/anyone_know_anything_about_prof_lei_yu_financial/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2598684" + "\n" + "Bio:"
		} else if (prof == "Bill Mclaury") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/2ars2z/best_teacher_for_intro_to_supply_chain_spiegle_or/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1921174" + "\n" + "Bio: https://www.business.rutgers.edu/faculty/william-mclaury"
		} else if (prof == "Eugene Spiegle") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/2ars2z/best_teacher_for_intro_to_supply_chain_spiegle_or/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1849806" + "\n" + "Bio: https://www.business.rutgers.edu/faculty/eugene-spiegle"
		} else if (prof == "Anthony Taitt") {
			var message = "Want to learn more about your perfect match? Check out some of the links below:" + "\n" + "\n" + "Reddit: https://www.reddit.com/r/rutgers/comments/l2a2qv/are_anthony_taitts_intro_to_supply_chain_classes/" + "\n" + "Ratemyproffesor: https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2226184" + "\n" + "Bio: https://www.business.rutgers.edu/faculty/anthony-taitt"
		} else {
			var message = notes
		}

		var emailSent = row[12]; // 13 column
		if (emailSent !== EMAIL_SENT) { // Prevents sending duplicates
			//var subject = 'Compatibility Assessment Results';
			//var message = "Hey, it's a match! Your most compatible professor is..." + " " + prof + " " + "Here is some additional information:" + " "

			// Make sure to update the emailTemplateDocId at the top.
			var docId = DocumentApp.openByUrl(EMAIL_TEMPLATE_DOC_URL).getId();
			var emailBody = docToHtml(docId);
			emailBody = emailBody.replace(/{{NAME}}/g, emailAddress);
			emailBody = emailBody.replace(/{{RESULT}}/g, notes);
			emailBody = emailBody.replace(/{{TOPICS}}/g, message);

			MailApp.sendEmail({
				to: emailAddress,
				subject: 'Compatibility Assessment Results',
				htmlBody: emailBody,
			});
			sheet.getRange(startRow + i, 13).setValue(EMAIL_SENT);
			// Make sure the cell is updated right away in case the script is interrupted
			SpreadsheetApp.flush();

			/**
			 * Downloads a Google Doc as an HTML string.
			 * 
			 * @param {string} docId - The ID of a Google Doc to fetch content from.
			 * @return {string} The Google Doc rendered as an HTML string.
			 */
			function docToHtml(docId) {

				// Downloads a Google Doc as an HTML string.
				var url = "https://docs.google.com/feeds/download/documents/export/Export?id=" +
					docId + "&exportFormat=html";
				var param = {
					method: "get",
					headers: {
						"Authorization": "Bearer " + ScriptApp.getOAuthToken()
					},
					muteHttpExceptions: true,
				};
				return UrlFetchApp.fetch(url, param).getContentText();
			}

		}
	}
}
