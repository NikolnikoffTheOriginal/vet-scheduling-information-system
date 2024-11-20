import { useRef, useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

interface IFormData {
  name: string;
  email: string;
  petName: string;
  phoneNumber: string;
  message: string;
}

interface IPersonalInfo {
  formData: IFormData
  onFinalSubmit: () => void;
  onBackClick: () => void;
  setFormData: (formData: IFormData | ((prev: IFormData) => IFormData)) => void;
}

export const PersonalInfo = ({ onFinalSubmit, onBackClick, formData, setFormData }: IPersonalInfo) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [emailError, setEmailError] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const updateTextArea = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  return (
    <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content items-center">
      <h1 className="text-2xl font-bold">Please enter your personal details.</h1>
      <div className="grid grid-cols-2 gap-2">

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow bg-inherit"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
        </label>

        <div>
          <label className={`input ${emailError ? 'input-error' : 'input-bordered'} flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-inherit"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => {
                updateField('email', e.target.value);
                setEmailError(false);

                if (!validateEmail(e.target.value)) {
                  setEmailError(true);
                }
              }}
            />
          </label>
          {emailError && <p className="text-xs text-error">Please enter a valid email address.</p>}
        </div>


        <label className="input input-bordered flex items-center gap-2">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-70">
            <path
              d="M4.086 7.9a1.91 1.91 0 0 1-.763 2.52c-.81.285-1.782-.384-2.17-1.492a1.91 1.91 0 0 1 .762-2.521c.81-.285 1.782.384 2.171 1.492zm6.521 7.878a2.683 2.683 0 0 1-1.903-.788.996.996 0 0 0-1.408 0 2.692 2.692 0 0 1-3.807-3.807 6.377 6.377 0 0 1 9.022 0 2.692 2.692 0 0 1-1.904 4.595zM7.73 6.057c.127 1.337-.563 2.496-1.54 2.588-.977.092-1.872-.917-1.998-2.254-.127-1.336.563-2.495 1.54-2.587.977-.093 1.871.916 1.998 2.253zm.54 0c-.127 1.337.563 2.496 1.54 2.588.977.092 1.871-.917 1.998-2.254.127-1.336-.563-2.495-1.54-2.587-.977-.093-1.872.916-1.998 2.253zm3.644 1.842a1.91 1.91 0 0 0 .763 2.522c.81.284 1.782-.385 2.17-1.493a1.91 1.91 0 0 0-.762-2.521c-.81-.285-1.782.384-2.171 1.492z" />
          </svg>
          <input
            type="text"
            className="grow bg-inherit"
            placeholder="Pet name"
            value={formData.petName}
            onChange={(e) => updateField('petName', e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <g transform="translate(-258.000000, -309.000000)" fill="currentColor">
              <path
                d="M289.073,313.433 L286.195,310.563 C285.401,309.77 284.112,309.77 283.317,310.563 L279,316.303 C278.341,317.274 278.206,318.38 279,319.173 L280.762,320.93 C279.456,322.68 277.888,324.588 276.123,326.348 C274.127,328.338 271.907,330.147 269.911,331.633 L268.208,329.936 C267.414,329.143 266.305,329.277 265.33,329.936 L259.574,334.241 C258.609,334.906 258.779,336.318 259.574,337.111 L262.452,339.98 C264.042,341.566 266.109,341.058 268.208,339.98 C268.208,339.98 274.561,336.424 280,331 C285.116,325.898 289.073,319.173 289.073,319.173 C289.898,316.91 290.663,315.018 289.073,313.433" id="phone">
              </path>
            </g>
          </svg>
          <input
            type="text"
            className="grow bg-inherit"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={(e) => updateField('phoneNumber', e.target.value)}
          />
        </label>

      </div>

      <textarea
        className="textarea textarea-bordered w-full resize-none overflow-hidden"
        placeholder="Message"
        onChange={(e) => {
          updateTextArea();
          updateField('message', e.target.value);
        }}
        ref={ref}
      ></textarea>

      <button
        className="btn btn-primary text-lg w-full"
        onClick={onFinalSubmit}
        disabled={Object.values(formData).every(value => value !== '') && !emailError ? false : true}
      >
        Submit
      </button>

      <button
        className="btn btn-secondary text-lg w-full"
        onClick={onBackClick}
      >
        Back
      </button>
    </div>
  );
};