import { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import ModulesControls from "./ModulesControls";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />

      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary text-white">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <div key={lesson._id}>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center wd-lesson p-3 ps-1">
                        <div>
                          <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                        </div>
                        <LessonControlButtons />
                      </ListGroup.Item>

                      <ListGroup.Item className="wd-lessons p-3 ps-4">{lesson.description}</ListGroup.Item>
                    </div>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
