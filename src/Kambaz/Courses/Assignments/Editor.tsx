export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h1>Assignment Name</h1>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea
        id="wd-description"
        rows={5}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
      ></textarea>
      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points:</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group:</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS" selected>
                  ASSIGNMENTS
                </option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="QUIZZES">EXAMS</option>
                <option value="PROJECTS">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as:</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage" selected>
                  Percentage
                </option>
                <option value="points">Points</option>
                <option value="complete/incomplete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type:</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online" selected>
                  Online
                </option>
                <option value="paper">Paper</option>
                <option value="none">None</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options:</label>
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to:</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due:</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from:</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until:</label>
            </td>
            <td>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ textAlign: "right" }}>
        <button type="button" onClick={() => alert("Assignment Cancelled!")}>
          Cancel
        </button>
        <button type="button" onClick={() => alert("Assignment Saved!")}>
          Save
        </button>
      </div>
    </div>
  );
}
