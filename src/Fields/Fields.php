<?php

declare(strict_types=1);

namespace MoonShine\Fields;

use MoonShine\Collections\MoonShineRenderElements;
use MoonShine\Contracts\Fields\HasFields;
use MoonShine\Contracts\HasReactivity;
use MoonShine\Fields\Relationships\ModelRelationField;
use Throwable;

/**
 * @extends FormElements<int, Field>
 */
final class Fields extends FormElements
{
    /**
     * @throws Throwable
     */
    public function fillCloned(
        array $raw = [],
        mixed $casted = null,
        int $index = 0,
        ?Fields $preparedFields = null
    ): self {
        return ($preparedFields ?? $this->onlyFields())->map(
            fn (Field $field): Field => (clone $field)
                ->resolveFill($raw, $casted, $index)
        );
    }

    /**
     * @throws Throwable
     */
    public function fill(array $raw = [], mixed $casted = null, int $index = 0): void
    {
        $this->onlyFields()->map(
            fn (Field $field): Field => $field
                ->resolveFill($raw, $casted, $index)
        );
    }

    /**
     * @throws Throwable
     */
    public function wrapNames(string $name): self
    {
        $this
            ->onlyFields()
            ->each(fn (Field $field): Field => $field->wrapName($name));

        return $this;
    }

    /**
     * @throws Throwable
     */
    public function reset(): void
    {
        $this->onlyFields()->map(
            fn (Field $field): Field => $field->reset()
        );
    }

    public function onlyHasFields(): self
    {
        return $this->filter(static fn (Field $field): bool => $field instanceof HasFields);
    }

    public function withoutHasFields(): self
    {
        return $this->filter(static fn (Field $field): bool => ! $field instanceof HasFields);
    }

    /**
     * @throws Throwable
     */
    public function onlyOutside(): self
    {
        return $this->filter(
            static fn (Field $field): bool => $field instanceof ModelRelationField && $field->outsideComponent()
        );
    }

    /**
     * @throws Throwable
     */
    public function withoutOutside(): MoonShineRenderElements
    {
        return $this->exceptElements(
            fn ($element): bool => $element instanceof ModelRelationField && $element->outsideComponent()
        );
    }

    /**
     * @throws Throwable
     */
    public function onlyRelationFields(): self
    {
        return $this->filter(
            static fn (Field $field): bool => $field instanceof ModelRelationField
        );
    }

    /**
     * @throws Throwable
     */
    public function withoutRelationFields(): MoonShineRenderElements
    {
        return $this->exceptElements(
            fn ($element): bool => $element instanceof ModelRelationField
        );
    }

    /**
     * @throws Throwable
     */
    public function indexFields(): self
    {
        return $this
            ->filter(static fn (Field $field): bool => $field->isOnIndex());
    }

    /**
     * @throws Throwable
     */
    public function formFields(bool $withOutside = true): MoonShineRenderElements
    {
        $closure = static fn ($element): bool => $element instanceof Field && ! $element->isOnForm();

        if ($withOutside === false) {
            $closure = static fn ($element): bool => ($element instanceof ModelRelationField
                && $element->outsideComponent())
                || $closure($element);
        }

        return $this->exceptElements($closure);
    }

    /**
     * @throws Throwable
     */
    public function detailFields(bool $withOutside = false, bool $onlyOutside = false): self
    {
        if ($onlyOutside) {
            return $this
                ->filter(
                    static fn (Field $field): bool => $field instanceof ModelRelationField
                        && $field->outsideComponent()
                        && $field->isOnDetail()
                );
        }

        if($withOutside) {
            return $this->filter(static fn (Field $field): bool => $field->isOnDetail());
        }

        return $this
            ->filter(
                static fn (Field $field): bool => $field->isOnDetail()
                && ! ($field instanceof ModelRelationField && $field->outsideComponent())
            );
    }

    /**
     * @throws Throwable
     */
    public function exportFields(): self
    {
        return $this->filter(static fn (Field $field): bool => $field->isOnExport());
    }

    /**
     * @throws Throwable
     */
    public function importFields(): self
    {
        return $this->filter(static fn (Field $field): bool => $field->isOnImport());
    }

    /**
     * @throws Throwable
     */
    public function reactiveFields(): Fields
    {
        return $this->filter(
            static fn (Field $field): bool => $field instanceof HasReactivity && $field->isReactive()
        );
    }

    /**
     * @return array<string, string>
     * @throws Throwable
     */
    public function extractLabels(): array
    {
        return $this->flatMap(
            static fn (Field $field): array => [$field->column() => $field->label()]
        )->toArray();
    }

    /**
     * @throws Throwable
     */
    public function findByRelation(
        string $relation,
        ModelRelationField $default = null
    ): ?ModelRelationField {
        return $this->onlyRelationFields()->first(
            static fn (ModelRelationField $field): bool => $field->getRelationName() === $relation,
            $default
        );
    }

    /**
     * @throws Throwable
     */
    public function findByColumn(
        string $column,
        Field $default = null
    ): Field|ModelRelationField|null {
        return $this->first(
            static fn (Field $field): bool => $field->column() === $column,
            $default
        );
    }

    /**
     * @template T of Field
     * @param  class-string<T>  $class
     * @param ?Field  $default
     * @return T
     * @throws Throwable
     */
    public function findByClass(
        string $class,
        Field $default = null
    ): ?Field {
        return $this->first(
            static fn (Field $field): bool => $field::class === $class,
            $default
        );
    }
}
