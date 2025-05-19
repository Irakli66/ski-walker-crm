import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import LabeledInput from '@/app/components/LabeledInput';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTranslations } from 'next-intl';

export default function First() {
  const t = useTranslations('FirstStep');
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xs">შეიყვანეთ ძირითადი მონაცემები</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-10">
            <LabeledInput
              id="name"
              label={t('name')}
              placeholder={t('namePlaceHolder')}
              className="placeholder:text-[10px]"
            />

            <Label className="text-primary text-md">{t('level')}</Label>
            <RadioGroup
              defaultValue="comfortable"
              className="md:flex md:gap-10"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="text-xs">
                  {t('beginner')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2" className="text-xs">
                  {t('intermediate')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3" className="text-xs">
                  {t('advanced')}
                </Label>
              </div>
            </RadioGroup>

            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework" className="text-primary text-md">
                  {t('Weight')}
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="10">10-13 kg (22-29 lbs)</SelectItem>
                    <SelectItem value="14">14-17 kg (30-38 lbs)</SelectItem>
                    <SelectItem value="18">18-21 kg (39-47 lbs)</SelectItem>
                    <SelectItem value="22">22-25 kg (48-56 lbs)</SelectItem>
                    <SelectItem value="26">26-30 kg (57-66 lbs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework" className="text-primary text-md">
                  {t('Height')}
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="148">
                      {`less or equal 148 cm (4'10" Ft.in.)`}
                    </SelectItem>
                    <SelectItem value="149">
                      {`149-157 cm (3'11" - 5'1" Ft.in.)`}
                    </SelectItem>
                    <SelectItem value="158">
                      {`158-166 cm (5'2" - 5'5" Ft.in.)`}
                    </SelectItem>
                    <SelectItem value="167">
                      {`167-178 cm (5'6" - 5'10" Ft.in.)`}
                    </SelectItem>
                    <SelectItem value="179">
                      {`179-194 cm (5'11" - 6'4" Ft.in.)`}
                    </SelectItem>
                    <SelectItem value="195">
                      {`more than 195 cm (6'5" Ft.in.)`}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
