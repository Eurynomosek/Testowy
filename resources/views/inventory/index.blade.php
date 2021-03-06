@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-4">
            <h1><i class="fas fa-clipboard-list"></i> {{ __('shop.product.index_title') }}</h1>
        </div>
        <div class="col-4">
            <input type="text" id="search-opis" class="form-control" placeholder="Wyszukaj artykuł po opisie">
        </div>
        <div class="col-4">
            <a class="float-right" href="{{ route('products.create') }}">
                <button type="button" class="btn btn-primary">{{ __('shop.button.add') }}</button>
            </a>
        </div>
    </div>
    <div class="row">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Numer inwentarzowy</th>
                    <th scope="col">Wysokocenny?</th>
                    <th scope="col">Opis</th>
                    <th scope="col">Data</th>
                    <th scope="col">Odpowiedzialny materialnie</th>
                    <th scope="col">{{ __('shop.columns.actions') }}</th>
                </tr>
            </thead>
            <tbody id="dynamic-row">
@foreach ($inventorys as $inventory )
                <tr>
                    <th scope="row">{{ $inventory->id }}</th>
                    <td>{{ $inventory->int_numer }}</td>
                    <td>{{ $inventory->int_wysoko }}</td>
                    <td>{{ $inventory->int_nazwa }}</td>
                    <td>{{ $inventory->int_data }}</td>
                    <td>{{ $inventory->int_nazwisko }}</td>
                    <td>
                        <a href=" ">
                            <button class="btn btn-primary btn-sm "> P </button>
                        </a>
                        <a href="">
                            <button class="btn btn-success btn-sm "> E </button>
                        </a>

                        <button class="btn btn-danger btn-sm delete" data-id=""> X </button>

                    </td>
                </tr>
@endforeach
            </tbody>
        </table>

    </div>
</div>
@endsection
@section('javascript')
    const dynSearchUrl = "{{ route('inventory.search') }}";
@endsection
@section('js-files')
    <script src="{{ asset('js/dynsearch.js') }}"></script>
@endsection
