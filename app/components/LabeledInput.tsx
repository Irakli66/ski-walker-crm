import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LabeledInputProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  labelClassName?: string;
}

export default function LabeledInput({
  id,
  label,
  placeholder,
  type = 'text',
  className = '',
  labelClassName = '',
}: LabeledInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className={`text-md text-primary ${labelClassName}`}>
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        className={className}
      />
    </div>
  );
}
