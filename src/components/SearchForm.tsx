type SearchFormProps = {
  searchText: string;
  onSearchTextChange: (text: string) => void;
};

export default function SearchForm({
  searchText,
  onSearchTextChange,
}: SearchFormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTextChange(event.target.value);
  };

  return (
    <form action="#" className="search" onSubmit={handleSubmit}>
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        onChange={handleChange}
        value={searchText}
        autoFocus={true}
      />
    </form>
  );
}
