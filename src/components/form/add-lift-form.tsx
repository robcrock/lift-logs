"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "../ui/popover";

import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const SubmitFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="secondary">
      {pending ? "Adding log..." : "Add Log"}
    </Button>
  );
};

// Form setup
// ***
// Step 1: Define your form schema
export const formSchema = z.object({
  date: z.date(),
  lift: z.enum(["", "deadlift", "squat", "bench", "press"]),
  weight: z.string().min(1),
  unit: z.enum(["lbs", "kg"]),
  sets: z.string().min(1),
  reps: z.string().min(1),
});
// ***
// Step 2: Define your form fields types
export type AddFormFields = z.infer<typeof formSchema>;

const AddLift = ({ createLift }: { createLift: any }) => {
  // 1. Define your form.
  const form = useForm<AddFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      lift: "",
      weight: "",
      unit: "lbs",
      sets: "",
      reps: "",
    },
  });

  // 2. Watch for date changes
  const date = form.watch("date");

  const handleSubmit = (values: AddFormFields) => {
    const { date, lift, weight, unit, sets, reps } = values;
    console.log("values", { values });
    form.reset();
    createLift({
      date,
      lift,
      weight,
      unit,
      sets,
      reps,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log a New Lift</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid gap-4"
          >
            {/* DATE */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Lift Date</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "justify-start text-left ",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              initialFocus
                              onSelect={field.onChange}
                              selected={field.value}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            {/* LIFT & WEIGHT*/}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="lift"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Lift Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select lift" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bench">Bench Press</SelectItem>
                            <SelectItem value="press">
                              Overhead Press
                            </SelectItem>
                            <SelectItem value="deadlift">Deadlift</SelectItem>
                            <SelectItem value="squat">Squat</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="flex items-end space-x-2">
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex w-full flex-col space-y-2">
                        <FormLabel>Weight</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter weight"
                            type="number"
                            {...form.register("weight", {
                              valueAsNumber: true,
                            })}
                            step={0.01}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="unit"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col space-y-2">
                        <FormControl>
                          <Select
                            defaultValue="lbs"
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lbs">lbs</SelectItem>
                              <SelectItem value="kg">kg</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            {/* SETS & REPS */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="sets"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Sets</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter sets"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="reps"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Reps</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter reps"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <SubmitFormButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddLift;
