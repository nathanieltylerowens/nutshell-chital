import teacherData from '../../helpers/data/teacher/teacherData';
import utils from '../../helpers/utils';

const buildEditForm = (teacherId) => {
  teacherData.getTeacherById(teacherId)
    .then((response) => {
      const teacher = response.data;
      const domString = `
      <form class="teacher-updater" id="${teacherId}">
        <div class="form-group">
          <label for="edit-teacher-name">Name</label>
          <input type="text" class="form-control" id="edit-teacher-name" value="${teacher.name}">
        </div>
        <div class="form-group">
          <label for="edit-teacher-image">Image URL</label>
          <input type="text" class="form-control" id="edit-teacher-image" value="${teacher.imageUrl}">
        </div>
          <button type="submit" class="btn btn-primary" id="update-teacher">Submit</button>
      </form>
      `;

      utils.printToDom('#teacher-form', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildEditForm };
