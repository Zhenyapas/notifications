import {
    Tag,
    Listbox,
    Combobox,
    Icon,
    LegacyStack,
    AutoSelection,
  } from '@shopify/polaris';
  import {SearchMinor} from '@shopify/polaris-icons';
  import {useState, useCallback, useMemo} from 'react';
  
  function LocationComboBox({type}:{type:string}) {
    const deselectedOptions = useMemo(
      () => [
        {value: 'custom', label: 'My custom Location'},
        {value: 'shop', label: 'Shop location'},
        {value: 'snow city', label: 'Snow City Warehouse'},
      ],
      [],
    );
  
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);
  
    const updateText = useCallback(
      (value: string) => {
        setInputValue(value);
  
        if (value === '') {
          setOptions(deselectedOptions);
          return;
        }
  
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex),
        );
        setOptions(resultOptions);
      },
      [deselectedOptions],
    );
  
    const updateSelection = useCallback(
      (selected: string) => {
        if (selectedOptions.includes(selected)) {
          setSelectedOptions(
            selectedOptions.filter((option) => option !== selected),
          );
        } else {
          setSelectedOptions([...selectedOptions, selected]);
        }
  
        updateText('');
      },
      [selectedOptions, updateText],
    );
  
    const removeTag = useCallback(
      (tag: string) => () => {
        const options = [...selectedOptions];
        options.splice(options.indexOf(tag), 1);
        setSelectedOptions(options);
      },
      [selectedOptions],
    );
  
    const tagsMarkup = selectedOptions.map((option) => (
      <Tag key={`option-${option}`} onRemove={removeTag(option)}>
        {option}
      </Tag>
    ));
  
    const optionsMarkup =
      options.length > 0
        ? options.map((option) => {
            const {label, value} = option;
  
            return (
              <Listbox.Option
                key={`${value}`}
                value={value}
                selected={selectedOptions.includes(value)}
                accessibilityLabel={label}
              >
                {label}
              </Listbox.Option>
            );
          })
        : null;
  
    return (
      <>
        <Combobox
          allowMultiple
          activator={
            <Combobox.TextField
              prefix={<Icon source={SearchMinor} />}
              onChange={updateText}
              label="Primary locations"
              helpText='You will receive a notification when the inventory of products at these locations falls to or below your low inventory threshold.'
              value={inputValue}
              placeholder={`Select ${type} locations`}
              autoComplete="off"
            />
          }
        >
          {optionsMarkup ? (
            <Listbox
              autoSelection={AutoSelection.None}
              onSelect={updateSelection}
            >
              {optionsMarkup}
            </Listbox>
          ) : null}
        </Combobox>

          <LegacyStack>{tagsMarkup}</LegacyStack>
   
      </>
    );
  }

  export default LocationComboBox;