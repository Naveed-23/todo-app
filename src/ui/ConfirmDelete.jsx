import FormButton from "./FormButton";
import Heading from "./Heading";

function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <div className="w-160 flex flex-col gap-5">
      <Heading><span className="text-xl">{resourceName}</span></Heading>
      <p className="text-gray-500 mb-5">
        Are you sure you want to {resourceName}? This action cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <FormButton variation="primary" onClick={onCloseModal}>
          Cancel
        </FormButton>
        <FormButton variation="danger" onClick={onConfirm}>
        {resourceName}
        </FormButton>
      </div>
    </div>
  );
}

export default ConfirmDelete;
