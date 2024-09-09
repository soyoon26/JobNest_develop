import {
  UseRowSelectInstanceProps,
  UseRowSelectState,
  UseRowSelectHooks,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  TableOptions,
  HeaderGroup as OriginalHeaderGroup,
  Row as OriginalRow,
  Column as OriginalColumn,
  TableInstance as OriginalTableInstance,
  TableToggleCommonProps,
} from "react-table";

declare module "react-table" {
  export interface TableOptions<D extends object = {}>
    extends UseRowSelectOptions<D> {}

  export interface Hooks<D extends object = {}> extends UseRowSelectHooks<D> {}

  export interface TableInstance<D extends object = {}>
    extends OriginalTableInstance<D>,
      UseRowSelectInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseRowSelectState<D> {}

  export interface Row<D extends object = {}>
    extends OriginalRow<D>,
      UseRowSelectRowProps<D> {
    getToggleRowSelectedProps: (props?: any) => TableToggleCommonProps;
  }

  export interface TableToggleCommonProps {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (event: unknown) => void;
  }

  export interface HeaderGroup<D extends object = {}>
    extends OriginalHeaderGroup<D> {
    getHeaderGroupProps: (props?: any) => TableToggleCommonProps;
    getToggleAllRowsSelectedProps: (props?: any) => TableToggleCommonProps;
  }

  export interface Column<D extends object = {}> extends OriginalColumn<D> {
    id: string;
  }
}
