interface IFilter {
  setFilteringOption: (value: string) => void;
  isNotApproveNeeded: boolean;
}

export const Filter = ({ setFilteringOption, isNotApproveNeeded }: IFilter) => (
  <>
    <p className="font-bold">Filter by: </p>
    <select
      className="bg-transparent"
      defaultValue={"none"}
      onChange={(e) => {
        setFilteringOption(e.target.value);
      }}>
      <option>none</option>
      <option>clinician (John Doe)</option>
      <option>clinician (Alice Smith)</option>
      <option>dog</option>
      <option>cat</option>
      <option>other pet species</option>
      {isNotApproveNeeded ? <option>approved</option> : ''}
      {isNotApproveNeeded ? <option>not approved</option> : ''}
    </select>
    <button
      className="btn btn-primary"
      onClick={() => {
        setFilteringOption('none');
      }}
    >
      Clear
    </button>
  </>
);