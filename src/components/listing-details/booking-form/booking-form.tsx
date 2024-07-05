import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import DateTime from '@/components/ui/form-fields/date-time-picker';
import SelectBox from '@/components/listing-details/booking-form/select-box';
import { Staricon } from '@/components/icons/star-icon';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';

interface BookingFormProps {
  price: number;
  averageRating: number;
  totalReviews: number;
  className?: string;
}

interface Option {
  label: string;
  description: string;
  price: number;
}

interface RadioGroupProps {
  options: Option[];
  onChange: (value: string) => void;
  selectedOption: string;
}

const list = [
  {
    title: 'Service fee',
    money: 65,
    type: 'servicefee',
  },
  {
    title: 'Total fee',
    money: 1400,
    type: 'total',
  },
];

const options: Option[] = [
  {
    label: 'Sea and Sand',
    description: 'Short description of option 1',
    price: 50,
  },
  {
    label: 'Fish and Bush',
    description: 'Short description of option 2',
    price: 75,
  },
  {
    label: 'Deep Sea Fishing',
    description: 'Short description of option 3',
    price: 100,
  },
];

const BookingSchema = z
  .object({
    startDate: z.date().min(new Date(), { message: 'Invalid Start Date!' }),
    endDate: z.date().min(new Date(), { message: 'Invalid End Date!' }),
    selected: z.object({
      adults: z.number().min(1, 'Minimum 1 Adult required!'),
      child: z.number(),
      pets: z.boolean(),
    }),
    option: z.string().optional().nullable(),
  })
  .refine(({ startDate, endDate }) => startDate < endDate, {
    message: 'End Date must be greater than Start Date.',
    path: ['startDate'],
  });

type BookingSchemaType = z.infer<typeof BookingSchema>;

const RadioGroup: React.FC<RadioGroupProps> = ({ options, onChange, selectedOption }) => (
  <div className="space-y-4 mt-4">
    {options.map((option, index) => (
      <label
        key={index}
        className={clsx(
          'flex items-center justify-between p-4 border rounded-lg cursor-pointer',
          selectedOption === option.label ? 'border-gray-600 bg-slate-50' : 'border-gray-300'
        )}
      >
        <div>
          <div className="text-lg font-medium">{option.label}</div>
          <div className="text-sm text-gray-500">{option.description}</div>
        </div>
        <div className="text-lg font-semibold">${option.price}</div>
        <input
          type="radio"
          name="option"
          value={option.label}
          checked={selectedOption === option.label}
          onChange={() => onChange(option.label)}
          className="hidden"
        />
      </label>
    ))}
  </div>
);

const BookingForm: React.FC<BookingFormProps> = ({
  price,
  averageRating,
  totalReviews,
  className,
}) => {
  const router = useRouter();
  const { control, getValues, handleSubmit, formState: { errors } } = useForm<BookingSchemaType>({
    defaultValues: {
      selected: {
        adults: 0,
        child: 0,
        pets: false,
      },
      option: '',
    },
    resolver: zodResolver(BookingSchema),
  });

  const [minEndDate, setMinEndDate] = useState(getValues('startDate'));
  const [focus, setFocus] = useState<boolean>(false);

  function handleBooking(data: BookingSchemaType) {
    console.log(data);
    router.push('/payments');
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => handleBooking(data))}
      className={clsx('rounded-xl border border-gray-lighter bg-white p-8 shadow-card', className)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xl font-bold text-gray-dark xl:text-[22px]">
          ${price} <span className="text-base">/ Day</span>
        </p>
        <p className="inline-flex flex-shrink-0 items-center gap-2">
          <Staricon className="xl:w-h-5 h-4 w-4 xl:h-5" />
          <span className="text-base font-bold text-gray-dark">{averageRating}</span>
          <span className="flex-shrink-0 text-sm font-normal text-gray-dark xl:text-base">
            ({' '}
            <a href="#reviews" rel="noopener noreferer" className="underline">
              {totalReviews} reviews
            </a>{' '}
            )
          </span>
        </p>
      </div>
      <div
        className={clsx(
          'relative mt-6 grid grid-cols-2 gap-3 rounded-t-lg border border-b-0 border-gray-lighter',
          focus && '!border-b !border-gray-dark ring-[1px] ring-gray-900/20',
        )}
        onBlur={() => setFocus(false)}
      >
        <span
          className={clsx(
            'absolute inset-y-0 left-1/2 translate-x-1/2 border-r border-gray-lighter',
            focus && '!border-gray-dark',
          )}
        ></span>
        <span className="absolute left-4 top-3 inline-block -translate-x-3 scale-75 text-sm font-semibold uppercase text-gray-dark">
          Trip Start
        </span>
        <span className="absolute right-4 top-3 inline-block translate-x-2 scale-75 text-sm font-semibold uppercase text-gray-dark">
          Trip End
        </span>
        <Controller
          name="startDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTime
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.blur();
                setFocus(true);
              }}
              onClickOutside={() => setFocus(false)}
              placeholderText="Add date"
              minDate={new Date()}
              selected={value}
              onChange={(date: Date) => {
                setMinEndDate(date);
                onChange(date);
              }}
              selectsStart
              startDate={getValues('startDate')}
              endDate={getValues('endDate')}
              dateFormat="eee dd / LL / yy"
              popperClassName="!translate-x-0 !right-0 !top-full booking-form-calendar"
              inputClassName="border-0 !text-base text-gray-dark !h-16 pt-5"
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTime
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.blur();
                setFocus(true);
              }}
              onClickOutside={() => setFocus(false)}
              placeholderText="Add date"
              selected={value}
              onChange={onChange}
              selectsEnd
              minDate={minEndDate}
              endDate={getValues('endDate')}
              startDate={getValues('startDate')}
              dateFormat="eee dd / LL / yy"
              popperClassName="!translate-x-0 !right-0 !top-full booking-form-calendar booking-form-calendar-two"
              inputClassName="border-0 !text-base text-gray-dark text-end !h-16 pt-5"
            />
          )}
        />
      </div>
      <Controller
        name="selected"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectBox defaultSelected={value} onChange={onChange} />
        )}
      />
      <p className="flex items-center justify-between text-xs text-red">
        <span>{errors.startDate?.message}</span>
        <span>{errors.endDate?.message}</span>
        <span>{errors.selected?.adults?.message}</span>
      </p>

      <Controller
        name="option"
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup options={options} onChange={onChange} selectedOption={value ?? ''} />
        )}
      />

      <div className="mt-6 space-y-4">
        {list.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-sm font-medium text-gray-dark">{item.title}</span>
            <span className="text-sm font-medium text-gray-dark">${item.money}</span>
          </div>
        ))}
      </div>

      <Button type="submit" className="mt-6 w-full">
        Book Now
      </Button>
    </form>
  );
};

export default BookingForm;
